"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";

const sequence = [
    "LR-Projects.",
    2000,
    "a Web Developer.",
    2000,
    "a Backend Developer.",
    2000,
    "a Homelabber.",
    2000,
    "an Entusiast.",
    2000,
    "a Student.",
    2000,
];

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold'>Hi, I'm Lukas.</h1>
            <div className='text-white mb-4 text-2xl sm:text-3xl lg:text-5xl font-extrabold'>
                <h1>I call myself <span>
                    <TypeAnimation
                        sequence={sequence}
                        wrapper="span"
                        speed={10}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
                        repeat={Infinity}
                    />
                    </span>
                </h1>
            </div>
            
            
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
            <div className='rounded-full bg-[#2f0438]/50 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image 
                src="/images/pop-art-coding.png"
                alt="pop-art image"
                className='absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'
                width={300}
                height={300}
            />
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection