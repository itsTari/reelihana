'use client'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Navbar = ({variant = 'light', color = 'white'}: {variant?: 'light' | 'dark', color?:'white' | 'black'}) => {
    const navbarStyles = {
        light: 'bg-white/95 text-black',
        dark: 'bg-black/95 text-white'
  };
  const textColor = {
    black: 'bg-transparent text-black',
    white:'bg-transparent  text-white'
  }
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
    <nav className={`flex h-16 p-4 fixed top-0 w-full z-50 transition-all duration-1000 ease-in-out ${ scroll? navbarStyles[variant] : textColor[color]} `}>
        <Link href='/' className='w-2/5'>
            <MenuIcon size={30} />
        </Link>
        <div className='flex-1'>
            <h1 className='text-3xl font-heading'>REELIHANA</h1>
        </div>
    </nav>
  )
}

export default Navbar