import ButtonGroup from '@/components/ButtonGroup'
import Navbar from '@/components/Navbar'
 
export default function NotFound() {

  const links = [
    {url:'/',title:'Retourner a la page home'},
    {url:'/project',title:'Decouvrir nos projets'},
    {url:'/gallery',title:'Decouvrir la gallerie'}

  ]


  return (
    <div className='flex flex-col mt-20 pt-20 w-full items-center min-h-[50vh]'>
      <Navbar blog={[]}></Navbar>

      <h2 className='font-rec1 text-4xl p-4 text-center'>{"Il semble que la page que tu cherche n&apos;existe pas ..."}</h2>
        <ButtonGroup links={links}/>
    </div>
  )
}