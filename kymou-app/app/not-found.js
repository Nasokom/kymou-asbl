import ButtonGroup from '@/components/ux/ButtonGroup'
import Link from 'next/link'
 
export default function NotFound() {

  const links = [
    {url:'/',title:'Retourner a la page home'},
    {url:'/project',title:'Decouvrir nos projets'},
    {url:'/gallery',title:'Decouvrir la gallerie'}

  ]



  return (
    <div className='flex flex-col mt-20 pt-20 w-full items-center min-h-[50vh]'>
      <h2 className='font-rec1 text-4xl p-4 text-center'>Il semble que la page que tu cherche n'existe pas ...</h2>

        <ButtonGroup links={links}/>
    </div>
  )
}