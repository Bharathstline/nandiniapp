'use client';

import React, { use } from 'react'
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from 'react';


export default function HeroSection() {
    const slides = [
        "/images/hero1.jpg",
        "/images/hero2.jpg",
        "/images/hero3.jpg",
    ]

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    }

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    }


   
    

  return (
    <div className="bg-lime-950 flex flex-col lg:grid lg:grid-flow-col items-center m-auto p-4 lg:p-10">

        {/* Left */}

        <div className='w-[80%] mx-auto text-slate-200'>
            <h1 className="text-4xl font-bold text-center">Hello, World!</h1>
            <p className="text-lg text-center">Welcome to your new Nandini App.</p>

        </div>


        {/* Right */}
        <div className='w-[60%] mx-auto mt-4'>

            <div className='overflow-hidden rounded-lg relative'>
                <div className='flex'>
                    {slides.map((slide, index) => (
                        <div key={index} className={index === current ? 'opacity-100' : 'opacity-0'}>
                            {index === current && (
                                <img src={slide} alt="hero" className='w-full h-full object-cover' />
                            )}
                        </div>
                    ))}
                </div>
                
                <div className='absolute top-0 w-full h-full flex justify-between px-10'> 
                    <button onClick={prevSlide}>
                        <FaArrowAltCircleLeft className='text-4xl text-white' />
                    </button>

                    <button onClick={nextSlide}>
                        <FaArrowAltCircleRight className='text-4xl text-white' />
                    </button>
                </div>

            </div>


        </div>
    </div>
  )
}
