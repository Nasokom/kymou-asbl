import type {StructureResolver} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import { RiArticleLine,RiArticleFill} from "react-icons/ri";
import { FaHeart , FaHome, FaAddressBook} from "react-icons/fa";
import { FaHeartCircleExclamation } from "react-icons/fa6";

const singletonListItem = (
  S:any,
  typeName:string,
  title:string
) =>
  S.listItem()
    .title(title || typeName)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName))
    

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S,context) =>
S.list()
          .title("Contenu de Kymou")
          .items([
            S.listItem()
              .title('Articles non publies')
              .schemaType('blogPost')
              .icon(RiArticleLine)
              .child(S.documentList().title('Article a venir').filter('_type == "blogPost" && date >= now() || _type == "blogPost" && !defined(date) ')),

            S.listItem()
              .title('Articles publies')
              .schemaType('blogPost')
              .icon(RiArticleFill)
              .child(S.documentList().title('Article sur la toile').filter('_type == "blogPost" && date <= now()')),
            S.divider(),

            // Our singleton type has a list item with a custom child
            ///* singletonListItem(S, "settings", "Settings"), */
            singletonListItem(S,'homePage2','Home Page ').icon(FaHome),
            singletonListItem(S, "contact", "Contact Page").icon(FaAddressBook),
            
            S.divider(),
            orderableDocumentListDeskItem({type: 'projectv2', S,context,icon:FaHeart, title:'Projets en ligne',filter:'isPublished == true'}),
            S.listItem()
              .title('projet non publie')
              .schemaType('blogPost')
              .icon(FaHeartCircleExclamation)
              .child(S.documentList().title('Article sur la toile').filter('_type == "projectv2" && !defined(isPublished)')),

             S.divider(),

  //             S.listItem()
  // .title('Projets')
  // .icon(FaHeart)
  
  // .child(
  //   S.list()
  //     .title('Projets')
  //     .items([
  //       S.listItem()
  //           .title(`Projets Publie`)
  //           .icon(FaHeartCircleCheck)
  //           .schemaType('projectv2')
  //           //.icon(FiAward)
  //           .child(
  //             S.documentList()
  //               //.id(language.id)
  //               .title(`projets`)
  //               .schemaType('projectv2')
  //               .filter('_type == "projectv2" && isPublished == true')
  //               //.params({language: language.id})
  //           ),
  //             S.listItem()
  //           .title(`Projets en attente`)
  //           .icon(FaHeartCircleExclamation)
  //           .schemaType('projectv2')
  //           //.icon(FiAward)
  //           .child(
  //             S.documentList()
  //               //.id(language.id)
  //               .title(`projets`)
  //               .schemaType('projectv2')
  //               .filter('_type == "projectv2" && isPublished != true')
  //               //.params({language: language.id})
  //           )
  //     ]
  //       ),
  // ),
           
  //           // Regular document types
          ])





