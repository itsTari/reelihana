import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <>
        <Navbar variant='dark'/>
        {children}
    </>
  )
}

export default layout