import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold">
                Hi, I'm Lukas.
            </h1>
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold">
                I call myself <span className="text-[hsl(280,100%,70%)]">LR-Projects.</span>
            </h1>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
            <div className='rounded-full bg-[#2f0438] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
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