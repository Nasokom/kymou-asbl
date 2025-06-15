import {defineQuery} from 'next-sanity'


export const HOME_QUERY = defineQuery(`*[_type == "homePage2"][0]{
  ...,
  header{
    ...,
      image{...,asset->}

  },
  footer{
    ...,
    image{
      asset->
    }
  }
}`)
export const POSTS_QUERY = defineQuery(`*[_type == "blogPost" && defined(slug.current) && now() > date ][0...12]{
  _id, title, author, slug,  content, _createdAt,publishedAt,description,
  hero{
    ...,
    asset-> {
      title,
      url,
      ...
    }
  },
}`)

export const BLOG_SITEMAP_QUERY = defineQuery(`*[_type == "blogPost" && now() > date ]{_id,slug,_createdAt,_updatedAt}`)

export const BLOG_LENGTH_QUERY= defineQuery(`*[_type == "blogPost" && now() > date ]{}`)
export const POST_QUERY = defineQuery(`*[_type == "blogPost" && slug.current == $slug][0]{
  _id,
  title,
  author,
  content, 
  publishedAt,
  _createdAt,
  description,
  hero{
    ...,
    asset->{
      ...
    }
  },
}`)

export const CONTACT_QUERY = defineQuery(`*[_type == "contact"][0]`)

export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "blogPost" && defined(slug.current)]{ 
  "slug": slug.current
}`)


export const GALLERY_QUERY = defineQuery(`*[ _type == 'sanity.imageAsset' && opt.media.tags != null]{
  originalFilename,
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

export const PROJECTS_QUERY = defineQuery(`*[_type == "projectv2" && isPublished == true]|order(orderRank)
        {
        title,
        _id,
        slug,
        hero{
          ...,
          asset->
        }}
        `)

export const PROJECTS_SITEMAP_QUERY = defineQuery(`*[_type == "projectv2" && isPublished == true]
        {
        title,
        _id,
        slug
        ,_createdAt,_updatedAt
         
          }
        `)
export const PROJECT_QUERY = defineQuery(`*[_type == "projectv2" && slug.current == $_id][0]
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

// Seo queries
export const OG_IMAGE_QUERY = defineQuery(`
  *[_id == $id][0]{
    title,
    description,
    hero,
    content,
    _createdAt,
    "image": hero.asset->{
      url,
      metadata {
        palette
      }
    }
  }    
`);

export const SITEMAP_QUERY = defineQuery(`
*[_type in ['homePage2','contact'] || _type == "projectv2" && defined(slug.current) && isPublished == true || _type =="blogPost" && defined(slug.current) && now() > date ] {
    "href": select(
      _type == 'homePage2' => "/",
      _type == 'contact' => "/contact",
      _type == "blogPost" => "/blog/" + slug.current,
      _type == "projectv2" => "/project/" + slug.current,

    ),
    'priority':select(
      _type == 'homePage2' => '0.5',
      _type == 'contact' => '0.3',
      _type == "blogPost" => '1',
      _type == "projectv2" => '1',
    ),
    'freq':select(
      _type == 'homePage2' => 'monthly',
      _type == 'contact' => 'yearly',
      _type == "blogPost" => 'weekly',
      _type == "projectv2" => 'weekly',
    ),
    _updatedAt
}
`)