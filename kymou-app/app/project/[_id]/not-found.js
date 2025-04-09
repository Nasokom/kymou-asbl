import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col mt-20 w-full items-center'>
      <h2 className='font-rec1 text-4xl'>Il semble que le projet que tu cherche n'existe pas ...</h2>


      <div className='flex w-full justify-around mt-8 font-rec'>
        <div className='flex flex-col justify-around items-center'>
            <Link href="/project" className='border-2 border-black p-4 transition rounded-lg hover:bg-white'>Retourner a la liste de projet</Link>
        </div>
        <div className='flex flex-col justify-around items-center'>
          <Link className='border-2 border-black p-4 transition rounded-lg hover:bg-white' href="/">Retourner a la page home</Link>
        </div>
      </div>
    </div>
  )
}