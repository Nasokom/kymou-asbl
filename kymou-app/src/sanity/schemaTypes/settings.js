import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'allowStudio',
      title: 'Machine Administrateur',
      description:"Definis les machines qui auront access au studio ",
      type: 'array',
      of:[{type:'object',fields:[{name:'name',title:"Nom de l'appareil",type:"string"},{name:"ip",title:"Adresse IP",type:'string'}]}]
    }),
  ]
})
