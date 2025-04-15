import ButtonGroup from '@/components/ux/ButtonGroup'
 
export default function NotFound() {


  const links = [
    {url:'/project',title:'Retourner a la liste de projet'},
    {url:'/',title:'Retoruner a la page Home'},
  ]
  return (
    <div className='flex flex-col mt-4 w-full items-center min-h-[50vh]'>
      <h2 className='font-rec1 text-4xl p-4 text-center'>Il semble que le projet que tu cherche n'existe pas ...</h2>

      <ButtonGroup links={links}/>

    </div>
  )
}