'use server'

import { client } from "./sanity/sanity"
import { unstable_noStore as noStore } from 'next/cache';


export async function getHome(){
    noStore()
    const datas = await client.fetch('*[_type == "homePage2"][0]')
    console.log(datas)
    return datas
}
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

export async function getProjectMin(){
    noStore()
    const datas = await client.fetch(`*[_type == "projectv2"]
        {
         slug,
        title,
        _updatedAt,
        }`)

    return datas
}

export async function getProjects(){
    noStore()
    const datas = await client.fetch(`*[_type == "projectv2"]|order(orderRank)
        {
        title,
        _id,
        slug,
        hero}
        `)
        return datas
    }

    export async function getProjectsPath(){
        noStore()
        const datas = await client.fetch(`*[_type == "projectv2"]|order(orderRank)
            {
            title,
            }
            `)
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
                    hero,
                    slug,
                    hero,
                    pitch,
                    problem,
                    action,
                    result,
                  'gallery':gallery[].asset->{
  originalFilename,
  url,
  title,
  description,
       'lqip':metadata.lqip,
    'dimensions':metadata.dimensions,
  altText,
  _rev,
}}`)
                    //result${resolveImg}

                

    return datas
}


// *[
//     references("image-07f4d7d7d158f55403883b9fee07da8e17f52639-1920x1088-jpg")
//     && 
//     _type == 'projectv2'
//   ][0]{slug, title}
  
export async function resolveInnerImgREF(_ref){
    noStore()
    const img = await client.fetch(`*[_type=='gallery' && _id == "${_ref}"][0]`)
    return img
}

export async function getGallery(){
    noStore()
    const datas = await client.fetch(`*[
  _type == 'sanity.imageAsset'
  && opt.media.tags != null
]{originalFilename,
  url,
  title,
  description,
       'lqip':metadata.lqip,
    'dimensions':metadata.dimensions,
  altText,
  _rev,
   "reference" : *[
    references(^._id)
    && 
    _type == 'projectv2'
  ][0]{slug, title}
    
}`)

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
