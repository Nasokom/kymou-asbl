import React from 'react'
import TitleEffect from '@/components/ux/TitleEffect'
import {getBlogPostsFake} from '@/utils/actions'
import Card from '@/components/global/Card'

export const metadata = {

  title: 'Blog de kymou ',
  description: 'Decouvrez les articles relatif a kymou',

}


const page = async () => {

  const articles = await getBlogPostsFake()

  return (

            <div className="w-full flex z-0 gap-10 justify-around z-0 pt-8 pb-32 items-center flex-wrap ">


               {articles.map((article,i)=> <Card key={i} project={article}/>)}


        </div>



  )
}

export default page