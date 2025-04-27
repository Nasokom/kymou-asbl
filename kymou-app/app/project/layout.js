import React from 'react'
import Title from '../../components/ux/Title'
import TitleProject from '@/components/Project/Title'
import Head from 'next/head'
const layout = ({children}) => {
  return (
    <>

      <Head>
      <meta name="google-site-verification" content="4VHbOuvyxkMPrmqoVd5xPWHVRe_y6d0khtbrCcdiCTY" />
      </Head>
    <div className='relative w-[100vw] pt-[25vh] max-[600px]:pt-[20vh] flex flex-col gap-4 p-4 max-[600px]:p-1 items-center'>
        <TitleProject url={'/project'} title={'NOS PROJETS'}/>
        {children}
    </div>
    </>
  )
}

export default layout