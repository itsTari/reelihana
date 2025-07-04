'use client'
import { MenuIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [scroll, setScroll] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            setScroll(window.scrollY > 20);
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return ()=> window.removeEventListener('scroll', handleScroll)
    },[])
  return (
    <nav className={`flex h-16 p-4 fixed top-0 w-full z-50 transition-all duration-1000 ease-in-out ${ scroll?'bg-white/95 text-black': 'bg-transparent text-white'} `}>
        <div className='w-2/5'>
            <MenuIcon size={30} />
        </div>
        <div className='flex-1'>
            <h1 className='text-3xl font-heading'>REELIHANA</h1>
        </div>
    </nav>
  )
}

export default Navbar