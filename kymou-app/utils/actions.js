'use server'

import { client } from "./sanity/sanity"
import { unstable_noStore as noStore } from 'next/cache';


export async function getHome(){
    noStore()
    const datas = await client.fetch('*[_type == "homePage2"][0]')
    return datas
}
export async function getIntro(){
    noStore()
    const datas = await client.fetch(`*[_type == "intro"][0]`)
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

    export async function getBlogPosts(){
        noStore()
        const datas = await client.fetch(`*[_type == "blogPost"]
             {title,
             author,
                content,
                _createdAt,
                description,
                slug,
                'hero':hero.asset->{
                            originalFilename,
                            url,
                            title,
                            description,
                                'lqip':metadata.lqip,
                                'dimensions':metadata.dimensions,
                            altText,
                            _rev,
                    },}`)
            return datas
        }

        export async function getBlogPostsFake(){
            noStore()
            const datas = await client.fetch(`*[_type == "blogPost"]`)
                return datas
            }

        export async function getSingleBlogPost(_slug){
            console.log(_slug)
            noStore()
            const datas = await client.fetch(`*[_type == "blogPost" && slug.current == '${_slug}'][0]
                {title,
                author,
                content[]{
                ...,
                markDefs[]{
                    ...,
                    _type == "projectLink" => {
                    _ref,
                    href-> {slug}
                    },
                     _type == "articleLink" => {
                    _ref,
                    href-> {slug}
                    },
                     _type == "inlineicon" => {
                    float,
                    'image':image.asset->{
                                originalFilename,
                                url,
                                title,
                                description,
                                'lqip':metadata.lqip,
                                altText,
                                _rev,
                            }
                    },
                }
                },
                _createdAt,
                description,
                slug,
                'hero':hero.asset->{
                            originalFilename,
                            url,
                            title,
                            description,
                                'lqip':metadata.lqip,
                                'dimensions':metadata.dimensions,
                            altText,
                            _rev,
                    },}`)
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
                    'hero':hero.asset->{
                            originalFilename,
                            url,
                            title,
                            description,
                                'lqip':metadata.lqip,
                                'dimensions':metadata.dimensions,
                            altText,
                            _rev,
                    },
                    slug,
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

           // console.log(datas.hero)

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
