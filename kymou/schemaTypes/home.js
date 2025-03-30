import { defineField,defineType } from "sanity";


export default defineType({
    name: 'homePage',
    type: 'document',
    title: 'Home page',
    fields: [
      defineField({
        title:'name',
        name:'title',
        type:'string',
        hidden:true

      }),
      defineField({
        title:'Header',
        name: 'header',
        type: 'reference',
        to: [{ type: 'homeHeader' }],  
        options: {
          // You can set 'disableNew' to true if you want to prevent creating a new homepage document
          disableNew: true,
          filter: '_type == "homeHeader"', // Optional filter
        },
      }),
      {
        name: 'axes',
        type: 'reference',
        to: [{ type: 'headerAxes' }],  
        options: {
          // You can set 'disableNew' to true if you want to prevent creating a new homepage document
          disableNew: true,
          filter: '_type == "headerAxes"', // Optional filter
        },
      },
      {
        name: 'homeFooter',
        type: 'reference',
        to: [{ type: 'about' }], 
        options: {
            disableNew: true,
            filter: '_type == "about"', 
          },
      },
      
    ],
  });
  