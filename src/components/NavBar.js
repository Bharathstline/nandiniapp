'use client';


import React from 'react'
import { MdMenuOpen } from "react-icons/md";
import { useState } from 'react';

import Link from 'next/link'

export default function NavBar() {

    const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-amber-500 flex justify-between  items-center p-4 ">

        <div>
            <img 
            src="/Logo.svg" 
            alt="Logo"
            className='w-20' />

        </div>

        <div>
            {/* desktop view */}
            <div className='hidden lg:flex space-x-4'>

                <Link href="/" className='text-white hover:text-amber-400'>
                Home
                </Link>
                
                <Link href="/about" className='text-white hover:text-amber-400'>
                About Us
                </Link>

                <Link href="/services" className='text-white hover:text-amber-400'>
                Services
                </Link>

                <Link href="/contact" className='text-white hover:text-amber-400'>
                Contact Us
                </Link>
                

            </div>

            {/* mobile view */}

            <div className='lg:hidden'>
                <button>
                <MdMenuOpen className='text-white text-2xl' onClick={ () => setShowMenu(!showMenu)} />
                </button>
            </div>

        </div>

        { showMenu && (
       
        <div className='bg-yellow-900 flex justify-center items-center right-0 top-0 fixed w-full h-full z-50 lg:hidden' onClick={ () => setShowMenu(!showMenu)}>

            <div className='grid grid-flow-row justify-center items-center text-center'>

                <Link href="/" className='text-white hover:text-amber-400 p-4'>
                Home
                </Link>
                
                <Link href="/about" className='text-white hover:text-amber-400 p-4'>
                About Us
                </Link>

                <Link href="/services" className='text-white hover:text-amber-400 p-4'>
                Services
                </Link>

                <Link href="/contact" className='text-white hover:text-amber-400 p-4'>
                Contact Us
                </Link>

            </div>     
        
        </div>
        )}


    </nav>
  )
}
