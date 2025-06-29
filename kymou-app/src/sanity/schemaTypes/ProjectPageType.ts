import { defineField, defineType } from "sanity";

export default defineType({
    name:'projectPage',
    title:'Page Project',
    type:'document',

    fields:[
        defineField({
            name:'name',
            title:'Page Blog',
            type:'string',
            initialValue:'Page de Blog'
        }),
        defineField({
            name:'title',
            title:'Titre de la page',
            type:'string',
        }),
        defineField({
            name:'description',
            title:'Description',
            type:'text',
            description:'Introduction du blog, raison des articles'
        }),
    
        defineField({
            name:'seo',
            type:'seo',
            title:'SEO'
        })
    ]
})