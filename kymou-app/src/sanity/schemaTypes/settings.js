import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [

    defineField({
      name:'name',
      hidden:true,
      type:'string',
      initialValue:'Reglages kymou.lu'
    }),
     defineField({
      name:'title',
      hidden:true,
      type:'string',
      initialValue:'Reglages kymou.lu'
    }),
    
    defineField({
      name: 'allowStudio',
      title: 'Machine Administrateur',
      description:"Definis les machines qui auront access au studio ",
      type: 'array',
      of:[{type:'object',fields:[{name:'name',title:"Nom de l'appareil",type:"string"},{name:"ip",title:"Adresse IP",type:'string'},{name:"allow",title:"Autoriser",type:'boolean'}]}]
    }),
  ]
})
