import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="w-full max-w-4xl" id="about-me">
        <h2 className="mb-6 text-3xl font-bold text-[hsl(280,100%,70%)]">About Me</h2>
        <p className="mb-8 text-lg leading-relaxed">
        I'm a passionate developer focused on creating elegant solutions to complex problems. 
        With expertise in web development and software engineering, I bring ideas to life through code.
        </p>
    </section>
  )
}

export default AboutSection