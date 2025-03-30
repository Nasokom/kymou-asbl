import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'content',
  name: 'content',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'title', value: 'h1'},
        {title: 'subTitle', value: 'h4'},
      ],
      lists: [
        //  {title: 'Bullet', value: 'bullet'}
        ],
        // Marks let you mark up inline text in the block editor.
        marks: {
          // Decorators usually describe a single property – e.g. a typographic
          // preference or highlighting by editors.
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
              {name: 'color', title: 'Color', type: 'color',
                  icon: () => 'C',

                component: (props) => (
                  <span style={{color: '#ff0000',backgroundColor:'red'}}>
                    {props.children}
                  </span>
                ),
              },
            {
              title: 'URL',
              name: 'link',
              type: 'object',
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

      // {
      //   type: 'image',
      //   fields: [
      //     {
      //       type: 'text',
      //       name: 'alt',
      //       title: 'Alternative text',
      //       description: `Some of your visitors cannot see images, 
      //         be they blind, color-blind, low-sighted; 
      //         alternative text is of great help for those 
      //         people that can rely on it to have a good idea of 
      //         what\'s on your page.`,
      //       options: {
      //         isHighlighted: true
      //       }
      //     }
      //   ]
      // }
    }),
    // defineArrayMember({
    //   name: 'inPhoto',
    //   title:'Photo liee au texte',
    //   type: 'reference',
    //     to: [{type: 'gallery'}]
    //   }),
]
  })
