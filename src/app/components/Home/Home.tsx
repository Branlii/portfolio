import React from 'react'
import Header from '../Header'
import { Lexend } from 'next/font/google'
import Link from 'next/link'

const lexend = Lexend({ subsets: ['latin'], })

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='absolute top-1/2 transform -translate-y-1/2 w-full text-center my-0 flex flex-col items-center gap-10'>
        <h1 className={`${lexend.className} text-textPrimary text-7xl text-shadow-lg`}>Full-Stack Developer</h1>
        <nav className='flex flex-row justify-between w-[40%]'>
          <Link href="#about" className='text-textSecondary text-2xl transition ease-in-out duration-500 hover:transition hover:ease-in-out hover:duration-500 hover:text-shadow-sm hover:-translate-y-[3px] hover:translate-x-[3px] hover:text-textPrimary'>ABOUT</Link>
          <Link href="#experiences" className='text-textSecondary text-2xl transition ease-in-out duration-500 hover:transition hover:ease-in-out hover:duration-500 hover:text-shadow-sm hover:-translate-y-[3px] hover:translate-x-[3px] hover:text-textPrimary'>EXPERIENCES</Link>
          <Link href="#projects" className='text-textSecondary text-2xl transition ease-in-out duration-500 hover:transition hover:ease-in-out hover:duration-500 hover:text-shadow-sm hover:-translate-y-[3px] hover:translate-x-[3px] hover:text-textPrimary'>PROJECTS</Link>
        </nav>
      </div>
    </div>
  )
}
