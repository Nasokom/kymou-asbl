'use server'

import { client } from "./sanity/sanity"
import { unstable_noStore as noStore } from 'next/cache';

export async function getIntro(){
    noStore()
    const datas = await client.fetch(`*[_type == "intro"][0]`)
    return datas
}

export async function getHomeHeader(){
    noStore()
    const datas = await client.fetch('*[_type == "homeHeader"][0]')
    return datas
}


export async function getContact(){
    noStore()
    const datas = await client.fetch('*[_type == "contact"][0]')
    return datas
}

export async function getAxes(){
    noStore()
    const datas = await client.fetch(`*[_type == "headerAxes"][0]`)
    return datas
}

export async function getAbout(){
    noStore()
    const datas = await client.fetch(`*[_type == "about"][0]`)
    return datas
}

export async function getProject(){
    noStore()
    const datas = await client.fetch(`*[_type == "project"][0]`)
    return datas
}

export async function getProjects(){
    noStore()
    const datas = await client.fetch(`*[_type == "projectv2"]
        {title,
        _id,
        "header": *[_type=='gallery' && references(^._id)]{image},
        slug,
        pitch,
        problem,
        action,
        result,
        image}
        `)
        console.log(datas)
        return datas
    }
    
    export async function getSingleProject(id){
        console.log(id)
        const resolveImg = 
        `{
            text,
            "inPhoto": *[_type == 'gallery' && _id == ^.inPhoto._ref][0]{
                image}
                }`
                noStore()
                const datas = await client.fetch(`*[_type == "projectv2" && slug.current == '${id}'][0]
                    {title,
                    _id,
                    "header": *[_type=='gallery' && references(^._id)]{image},
                    slug,
                    hero,
                    pitch${resolveImg},
                    problem${resolveImg},
                    action${resolveImg},
                    result${resolveImg},
                    image}`)
                    console.log(datas)
    return datas
}

export async function resolveInnerImgREF(_ref){
    noStore()
    const img = await client.fetch(`*[_type=='gallery' && _id == "${_ref}"][0]`)
    return img
}

export async function getGallery(){
    noStore()
    const datas = await client.fetch(`*[_type == "gallery" && show == true]|order(orderRank)
          {  title,
            "url": *[_type=='projectv2' && references(^._id)][0]{slug},
            image,
            orderRank,
        }`)
    const backup= await client.fetch(`*[_type == "project"][0]{gallery}`)
    console.log(datas[0])
    return datas
}
export async function getLqip(){
    noStore()
    const datas = await client.fetch(`*[_type == "sanity.imageAsset"
 ]{
   _id,
   metadata{
   lqip
 }
 }`)
        return datas
}
