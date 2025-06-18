import {defineField, defineType} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import { PiArticleMediumLight } from "react-icons/pi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";

export default defineType({
  name: 'projectv2',
  title: 'projectsV4',
  type: 'document',
  groups:[
        {name: 'edit', title: 'Contenu Article', icon:PiArticleMediumLight, default: true},
        {name: 'detail', title: 'Details', icon:MdOutlineSettings},
        {name: 'publish', title: 'Publication', icon:MdOutlineRocketLaunch},
  ],

  orderings: [orderRankOrdering],
  fields: [

    orderRankField({ type: "orderRank" }),

    defineField({
        name: 'title',
        title: 'title',
        type: 'string',
        group:'edit',
        validation: rule => [
      rule.required().min(10).error('A title of min. 10 characters is required'),
      rule.max(50).warning('Shorter titles are usually better')
  ]
      }),

      defineField({
        name:'isPublished',
        type:'boolean',
        description:'Clicker pour publier le projet',
        group:['detail','publish'],
        initialValue:false,
         readOnly: ({document}) => document?.title == null || document?.slug == null || document?.hero == null
      }),
      
      defineField({
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        group:['detail'],
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\//g,'')
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      }),

      defineField({
        name: 'hero',
        title:'Image header',
        type: 'image',
        group:'edit'
      }),
  
      defineField({
        name: 'pitch',
        type:'textImg',
           group:'edit'
      }),

      defineField({
        name: 'problem',
        type:'textImg',
           group:'edit'
      }),
      
      defineField({
        name: 'action',
        type:'textImg',
           group:'edit'
      }),

      defineField({
        name: 'result',
        type:'textImg',
           group:'edit'
      }),
      defineField({
        name: 'gallery',
        type:'array',
        of:[{type: 'image'}],
           group:'edit'
      }),

  ],
  
})
