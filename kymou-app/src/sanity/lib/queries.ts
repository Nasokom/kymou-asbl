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

export const BLOG_PAGE_QUERY = defineQuery('*[_type == "blogPage"][0]');
export const POSTS_QUERY = defineQuery(`*[_type == "blogPost" && defined(slug.current) && isPublished == true && now() > date ][0...12]{
  _id, title, author, slug,  content, _createdAt,publishedAt,description,
  hero{
    ...,
    asset-> {
      title,
      url,
      credit,
      ...
    }
  },
}`)

export const BLOG_SITEMAP_QUERY = defineQuery(`*[_type == "blogPost" && now() > date && isPublished == true ]{_id,slug,_createdAt,_updatedAt}`)

export const BLOG_LENGTH_QUERY= defineQuery(`*[_type == "blogPost" && now()  > date && isPublished == true ]{}`)
export const POST_QUERY = defineQuery(`*[_type == "blogPost" && slug.current == $slug][0]{
  _id,
  'slug':slug.current,
  title,
  author,
  content, 
  publishedAt,
  _createdAt,
  _updatedAt,
  description,
  'rawContent':pt::text(content),
  seo,
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

export const PROJECT_PAGE_QUERY = defineQuery('*[_type == "projectPage"][0]');
  
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
export const PROJECT_QUERY = defineQuery(`*[_type == "projectv2" && slug.current == $slug][0]
                    {title,
                    _id,
                    seo,
                    _createdAt,
                    _updatedAt,
                    seo,
                     hero{
                      ...,
                      asset->{
                        ...
                      }
                    },
                    'rawIntro':pt::text(pitch.text),
                    'rawContent':pt::text(pitch.text+problem.text+action.text+result.text),
                    slug,
                    pitch{text,"image":image.asset->},
                    problem{text,"image":image.asset->},
                    action{text,"image":image.asset->},
                    result{text,"image":image.asset->},
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
*[_type in ['homePage2','contact','projectPage','blogPage'] || _type == "projectv2" && defined(slug.current) && isPublished == true || _type =="blogPost" && defined(slug.current) && now() > date ] {
    "href": select(
      _type == 'homePage2' => "/",
      _type == 'contact' => "/contact",
      _type == 'projectPage' => "/project",
      _type == 'blogPage' => "/blog",
      _type == "blogPost" => "/blog/" + slug.current,
      _type == "projectv2" => "/project/" + slug.current,
    ),

    'priority':select(
      _type == 'homePage2' => 0.5,
      _type == 'blogPage' => 0.5,
      _type == 'projectPage' => 0.5,
      _type == 'contact' => 0.3,
      _type == "blogPost" => 1,
      _type == "projectv2" => 1,
    ),

    'freq':select(
      _type == 'homePage2' => 'monthly',
      _type == 'projectPage' => 'monthly',
      _type == 'blogPage' => 'monthly',
      _type == 'contact' => 'yearly',
      _type == "blogPost" => 'weekly',
      _type == "projectv2" => 'weekly',
    ),
    _updatedAt
}
`)

export const SETTINGS_QUERY = defineQuery(`*[_type == "settings" ][0]`)