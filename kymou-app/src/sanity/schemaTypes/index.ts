import { type SchemaTypeDefinition } from 'sanity'
import blockContent from './blockContent'
import blogContent from './blogContent'
//import settings from './settings'
import projectV2 from './projectV2'
import content from './content'
import textImg from './textImg'
import contact from './contact'
import customMedia from './customMedia'
import home2 from './home2'
import blogPost from './blogPost'
import settings from './settings'
import { seoType } from './seoType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [seoType,settings,blogContent,blogPost,home2,customMedia,contact,textImg,content, blockContent, projectV2],
}
