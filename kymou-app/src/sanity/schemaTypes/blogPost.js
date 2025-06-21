import {defineField,defineType} from 'sanity'
import { PiArticleMediumLight } from "react-icons/pi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";

export default defineType({
    title:'Article',
    name:'blogPost',
    type:'document',
    groups: [
    {name: 'editorial', title: 'Contenu Article', icon:PiArticleMediumLight, default: true},
    {name: 'details', title: 'Details', icon:MdOutlineSettings},
    {name: 'publish', title: 'Publication', icon:MdOutlineRocketLaunch},
],
    fields:[
   
        defineField({
            name:'title',
            title:"Titre de l'article",
            type:'string',
            validation: rule => [
              rule.required().min(10).error('A title of min. 10 characters is required'),
              rule.max(50).warning('Shorter titles are usually better'),
            ],
            group: ['details','editorial'],
        }),

        defineField({
            name:'slug',
            title:'Slug',
            type:'slug',
            group: 'details',
            description:"Url de l'article",
            options: {
            source: 'title',
            // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\//g,'')
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        },
        validation: (rule) => rule
        .required()
        .error(`Required to generate a page on the website`),
        }),
        
        defineField({
            name:'description',
            title:"Pitch de l'article",
            type:'text',
            group: 'editorial',
        }),

        defineField({
            name:'date',
            type:'date',
            description:'Date de publication',
             group: ['publish','details'],
        }),
       
        
        defineField({
            name: 'hero',
            title:'Image principale',
            type: 'image',
            options: {
                hotspot: true,
            },
            group:'editorial'
          }),

        defineField({
            name:'content',
            title:'Article',
            type:'blogContent',
               group:'editorial',
            options:{
                editModal:'fullscreen'
            }
        }),

      defineField({
            name:'author',
            title:'Auteur',
            type:'object',
            group: 'details',
            fields:[{type:'string',name:'name',initialValue:'Katherine Nicol-Kombia'},
                {name:'image', type:'image',title:'photo'}
            ]
        }),

          defineField({
            name:'isPublished',
            title:"Publier l'article",
            type:'boolean',
            initialValue:'false',
            description:'Publier article ?',
             group: ['publish','details'],
        }),
          defineField({
        name:'seo',
        type:'seo',
        group:'details'
      }),

    ],
    preview: {
  select: {
    name: 'title',
    date: '_createdAt',
    update:'_updatedAt',
    image: 'hero',
  },

  prepare({name,  date,update, image}) {
    const nameFormatted = name || 'Untitled event'

    const dateFormatted = date
      ? new Date(date).toLocaleDateString(undefined, {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
      : 'No date'

       const lastUpdate = update
      ? new Date(update).toLocaleDateString(undefined, {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
      : 'No date'

    return {
      title: nameFormatted,
      subtitle:  `Creation: ${dateFormatted} | Mis a jour: ${lastUpdate}` ,
      media: image,
    }
  },
},
})