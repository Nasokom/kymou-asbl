import React from 'react'
import Title from '../component/ux/Title'

const layout = ({children}) => {
  return (
    <div className='min-h-[100dvh] w-[100vw] flex flex-col gap-4 mt-8 p-4 items-center'>
        <Title classN={''}>Nos Projets</Title>
        {children}
    </div>
  )
}

export default layout