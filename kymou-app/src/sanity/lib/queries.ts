import {defineQuery} from 'next-sanity'

export const POSTS_QUERY = defineQuery(`*[_type == "blogPost" && defined(slug.current)][0...12]{
  _id, title, author, slug,publishedAt,hero{
    ...,
    asset->
  },
}`)


export const POST_QUERY = defineQuery(`*[_type == "blogPost" && slug.current == $slug][0]{
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

export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "blogPost" && defined(slug.current)]{ 
  "slug": slug.current
}`)