import {defineType, defineArrayMember} from 'sanity'
import { IoImage } from 'react-icons/io5'
import { LinkArticle,LinkProject,LinkExtern} from './components/Links'
import { RiArticleLine} from "react-icons/ri";
import { LaunchIcon } from '@sanity/icons'
import {FaHeart} from 'react-icons/fa'
import ImageText from './components/ImageText';
import { PortableTextInput } from 'sanity'
import { Box } from '@sanity/ui'
import ImageRender from './components/ImageRender';

export default defineType({
  title: 'content',
  name: 'blogContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'subTitle', value: 'h2'},
      ],

      lists: [
         {title: 'Bullet', value: 'bullet'},
         {title: 'number', value: 'number'}
        ],
        marks: {

          decorators: [
            {title: 'Strong', value: 'strong'},
            {title: 'Emphasis', value: 'em'},
            {title: 'Underline', value: 'underline'},
            {
              title: 'Highlight',
              value: 'highlight',
                icon: () => 'H',
              component: (props) => (
                <span style={{backgroundColor: '#0f0',fontFamily:'plakkaat'}}>
                  {props.children}
                </span>
              ),
            //  icon: BulbOutlineIcon
            },
          ],
          // Annotations can be any object structure – e.g. a link or a footnote.
          annotations: [
            {
                title: 'Image aligner au texte',
                name: 'inlineicon',
                type: 'image',
                components:{
                  annotation:ImageText
                },
                blockEditor: {
                    description:'test',
                  icon: IoImage,
                }
            },
            {
              title: 'Lien vers un projet Kymou',
              name: 'projectLink',
              type: 'object',
              icon:  FaHeart,
              components: {
                annotation :LinkProject
              },

              fields: [
                {
                  title: 'URL',
                  name: 'href',
                  type: 'reference',
                  to:[{type:'projectv2'}]
                },
              ],
            },

            {
              title: 'Lien vers un article kymou',
              name: 'articleLink',
              type: 'object',
              icon: RiArticleLine,
              components: {
                annotation :LinkArticle
              },
              fields: [
                {
                  title: 'URL',
                  name: 'href',
                  type: 'reference',
                  to:[{type:'blogPost'}]
                },
              ],
            },

            {
              title: 'lien source externe',
              name: 'externalLink',
              type: 'object',
              icon:LaunchIcon,
              components: {
                annotation :LinkExtern
              },
              fields: [
                {
                  title: 'URL',
                  name: 'href',
                  type: 'url',
                },

              ],
            },
          ],
        },
        

    }),

      {
        type: 'image',
        description:'test',
        blockEditor: {
            icon: IoImage,
          },
          components: ImageRender,
        fields: [
          {
            type:'boolean',
            name:'isFullScreen',
            title:'FullScreen',
            initialValue:false
          },
        ]
      }
],
// components: {
//   field: (props) => (
//     <Box 
//       style={{
//         position: 'fixed',
//         width:'100vh',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'white',
//         padding: '2rem',
//         overflowY: 'auto',
//         zIndex: 100, // Make sure it's on top
//       }}
//     >
//       {props.renderDefault(props)}
//     </Box>
//   )
// }

  })
