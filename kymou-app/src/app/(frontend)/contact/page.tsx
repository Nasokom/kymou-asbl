import Link from 'next/link'

import { sanityFetch } from "@/sanity/lib/live";
import { CONTACT_QUERY } from "@/sanity/lib/queries";
import CustomPortableText from "@/components/CustomPortableText"
 
export const metadata = {
  title: 'Contact',
  description: 'Soutenir Kymou asbl luxembourg',
}

const page = async () => {
const {data:data}  = await sanityFetch({ query: CONTACT_QUERY });

return (

    <div className='min-h-[100dvh] w-[100vw] max-w-[1200px] pt-24 pb-12 items-left justify-center flex flex-col gap-4 p-8'>

        {data?.text && <CustomPortableText  className={'text-2xl'} value={data?.text}/>}

          <div className='mt-4'>
            <p className='font-rec1 text-2xl'>{data?.contact?.title}</p>
            <Link className='underline text-2xl hover:text-[--color2]' href={'mailto:'+data?.contact?.email}>{data?.contact?.email}</Link>
          </div>

      <div className='w-full flex flex-col items-center justify-center gap-4'>
        <p className='font-rec1 text-4xl'>{data?.catch}</p>
        
        
        <div className='zigzagsm p-4 rounded-xl relative'>

          <div className='flex flex-col p-4 gap-2 bg-[#ffff] rounded-xl text-2xl'>
            <p>{data?.asbl?.name}</p>

            <p>{data?.asbl?.bic}</p>

            <p>{data?.asbl?.iban}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page