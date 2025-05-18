// https://www.sanity.io/docs/structure-builder-cheat-sheet
import { RiArticleLine,RiHeart2Fill} from "react-icons/ri";
import { FaHeart , FaHome, FaAddressBook} from "react-icons/fa";

import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'


const singletonListItem = (
  S,
  typeName,
  title
) =>
  S.listItem()
    .title(title || typeName)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName))
    

export const structure = (S,context) =>
        S.list()
          .title("Contenu de Kymou")
          .items([

            // Our singleton type has a list item with a custom child
            ///* singletonListItem(S, "settings", "Settings"), */
            singletonListItem(S,'homePage2','Home Page ').icon(FaHome),
            orderableDocumentListDeskItem({type: 'projectv2', S,context,icon:FaHeart}),
            S.documentTypeListItem("blogPost").title("Liste des Articles").icon(RiArticleLine),
            singletonListItem(S, "contact", "Contact Page").icon(FaAddressBook),

           
            // Regular document types
          ])
