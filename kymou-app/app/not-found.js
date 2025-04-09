import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col mt-20 pt-20 w-full items-center min-h-[50vh]'>
      <h2 className='font-rec1 text-4xl p-4 text-center'>Il semble que la page que tu cherche n'existe pas ...</h2>


      <div className='flex w-full flex-wrap justify-around mt-8 font-rec gap-4'>
        <div className='flex flex-col justify-around items-center'>
          <Link className='border-2 border-black p-4 transition rounded-lg hover:bg-white' href="/">Retourner a la page home</Link>
        </div>
        <div className='flex flex-col justify-around items-center'>
            <Link href="/project" className='border-2 border-black p-4 transition rounded-lg hover:bg-white'>Decouvrir nos projets</Link>
        </div>

        <div className='flex flex-col justify-around items-center'>
          <Link className='border-2 border-black p-4 transition rounded-lg hover:bg-white' href="/gallery">Decouvrir la gallerie</Link>
        </div>
      </div>
    </div>
  )
}