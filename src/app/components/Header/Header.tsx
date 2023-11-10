"use client"
import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'], weight: ['200'], })

export default function Header() {
  const handleScroll = (e: any) => {
    console.log('scroll', e)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className='flex flex-row justify-between items-center p-10'>
        <h2 className={`${inter.className} text-textSecondary text-6xl`}>Raphaël<br/>Guillot</h2>
        <Image src="/profile_picture.jpg" alt="Profile picture" width={150} height={150} className='rounded-full object-cover'/>
      </header>
    </>
  )
}
