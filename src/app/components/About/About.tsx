import { Lexend } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const lexend = Lexend({ subsets: ['latin'], })

export default function About() {
  return (
    <div id="about" className='flex flex-col min-h-screen px-14 py-14'>
      <h2 className={`${lexend.className} text-textPrimary text-5xl text-shadow-md`}>About</h2>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-col gap-10 md:w-1/2 py-24 md:px-10'>
          <p className='text-textSecondary leading-normal'>Young <span className='text-textPrimary'>Web Developer based in Paris</span>, I&apos;ve started code when I was 14 by playing Scratch a lot during IT lesson. Since that day, I haven&apos;t stopped learning things about development. As of today, after a lot of personal project and school projects, I&apos;ve been hired in <Link href="https://moment.tech/" className='text-textPrimary underline'>a French startup</Link> as alternating Full-Stack Developer</p>
          <p className='text-textSecondary leading-normal'>Currently, I&apos;m focused on my <span className='text-textPrimary'>alternating</span> because it takes the most of my time. However I primarily use <span className='text-textPrimary underline'>Typescript</span>, <span className='text-textPrimary underline'>React</span> and <span className='text-textPrimary underline'>Javascript</span> in general. But i used to code in <span className='text-textPrimary underline cursor-python'>Python</span>, <span className='text-textPrimary underline'>Java</span>, <span className='text-textPrimary underline'>SQL</span> too for example</p>
          <p className='text-textSecondary leading-normal'>But during my free-time, I love <span className='text-textPrimary'>reading books</span> outside, <span className='text-textPrimary'>watching movies</span>, <span className='text-textPrimary'>hanging out</span> with my friends and sometimes <span className='text-textPrimary'>mining some Netherite</span> somewhere between Y=22 and Y=8 or <span className='text-textPrimary'>still coding</span> because we code never enough !</p>
          <p className='text-textSecondary leading-normal'>Lately, I aimed to start working in <span className='text-textPrimary'>freelance</span>, so if you know some people who are interested with my profile, I would thank you to share that portfolio to them ;-)</p>
        </div>
      </div>
    </div>
  )
}
