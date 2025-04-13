import React from 'react'
import Title from '../../components/ux/Title'
import TitleProject from '@/components/Project/Title'
const layout = ({children}) => {
  return (
    <div className='relative w-[100vw] pt-[25vh] overflow-x-hidden flex flex-col gap-4 p-4 items-center'>
        <TitleProject/>
        {children}
    </div>
  )
}

export default layout