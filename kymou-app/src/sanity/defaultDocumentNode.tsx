import type {DefaultDocumentNodeResolver} from 'sanity/structure'
import BlogCard from '../components/BlogCard'
import ProjectCard from '../components/Project/ProjectCard'


const article = ({document}:{document:any}) => <BlogCard className={'p-4 pointer-events-none'} data={document.displayed}/>

const projet = ({document}:{document:any}) => {
  return(
    <div className='w-full flex justify-center items-center p-10'>
      <ProjectCard className='max-h-[30%] h-[100px] pointer-events-none' project={document.displayed} isUnique={true} index={0}/>
    </div>
  )
}


export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `blogPost`:
      return S.document().views([
        S.view.form(),
        S.view.component(article).title('Web')
          .title('Carte Article'),
      ])
      case `projectv2`:
      return S.document().views([
        S.view.form(),
        S.view.component(projet).title('Web')
          .title('Carte projet'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
// if (schemaType === "post") {
//    return S.document().views([
//      S.view.form(),
//      S.view.component(WebPreview).title('Web')
//    ])  
//  }
//  return S.document().views([
//    S.view.form(),
//    S.view.component(JsonView).title('JSON')
//  ])