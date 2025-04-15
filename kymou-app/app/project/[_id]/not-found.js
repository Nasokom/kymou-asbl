import ButtonGroup from '@/components/ux/ButtonGroup'
import Link from 'next/link'
 
export default function NotFound() {


  const links = [
    {url:'/',title:'Retourner a la liste de projet'},
    {url:'/project',title:'Retoruner a la page Home'},
  ]
  return (
    <div className='flex flex-col mt-4 w-full items-center min-h-[50vh]'>
      <h2 className='font-rec1 text-4xl p-4 text-center'>Il semble que le projet que tu cherche n'existe pas ...</h2>

      <ButtonGroup links={links}/>

    </div>
  )
}