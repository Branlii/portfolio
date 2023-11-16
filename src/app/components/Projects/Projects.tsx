"use client"
import { Inter, Lexend } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { SchoolProjects, Shomp, Scrapers } from './ChipsLists'
import { useKeenSlider } from 'keen-slider/react'

const lexend = Lexend({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'], weight: ['400'] })

export default function Experiences() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 25,
    },
    renderMode: 'performance',
  })

  return (
    <div id="projects" className='flex flex-col h-screen px-14 py-14'>
      <h2 className={`${lexend.className} text-textPrimary text-5xl text-shadow-md`}>Projects</h2>
      <div ref={ref} className='keen-slider h-full mb-10 flex flex-row overflow-x-hidden cursor-grab active:cursor-grabbing'>
        <div className='keen-slider__slide min-w-[85%] flex flex-row bg-[#51513D] rounded-lg mt-10'>
          <div className='flex flex-col items-center justify-between w-2/5 my-6 overflow-y-auto'>
            <div className='flex flex-col'>
              <h4 className={`${inter.className} text-textPrimary text-xl mb-5 text-center`}>School projects</h4>
              <ul className='list-disc ml-8 text-textSecondary text-sm pr-10 text-left'>
                <li>A lot of different projects since last year</li>
                <li>Made in group of 3-4</li>
                <li>Essentially to learn basics of a lot of languages</li>
                <li>You can have a taste of it on my <Link href="https://github.com/raphaelglt?tab=repositories" className='text-textPrimary underline'>school GitHub profile</Link></li>
              </ul>
              <SchoolProjects />
            </div>
            
            <div className='flex flex-col items-center gap-3'>
            <span className='text-textSecondary text-xs text-center'>Image from a Space Invader project made in one week in HTML/CSS/JS</span>
              <span className='text-textSecondary'>September 2022 - Present</span>
            </div>
          </div>
          <div className='rounded-r-lg w-3/4 bg-[url("/space-invader.png")] bg-no-repeat bg-cover bg-center'></div>
        </div>
        <div className='keen-slider__slide min-w-[85%] flex flex-row bg-[#51513D] rounded-lg mt-10'>
          <div className='flex flex-col items-center justify-between w-2/5 my-6'>
            <div className='flex flex-col items-center'>
              <h4 className={`${inter.className} text-textPrimary text-xl mb-5`}>Shomp</h4>
              <ul className='list-disc ml-8 text-textSecondary'>
                <li>UberEats abuser</li>
                <li>Made in group of 3</li>
                <li>We wanted to apply discount on each payment</li>
                <li>Project unfinished</li>
              </ul>
              <Shomp />
            </div>
            
            <div className='flex flex-col items-center gap-3'>
            <span className='text-textSecondary text-xs text-center'>Image from Shomp, an UberEats reduction appplier</span>
              <span className='text-textSecondary'>April - June 2023</span>
            </div>
          </div>
          <div className='rounded-r-lg w-3/4 bg-[url("/shomp.png")] bg-no-repeat bg-cover bg-center'></div>
        </div>
        <div className='keen-slider__slide min-w-[85%] flex flex-row bg-[#51513D] rounded-lg mt-10'>
          <div className='flex flex-col items-center justify-between w-2/5 my-6'>
            <div className='flex flex-col items-center'>
              <h4 className={`${inter.className} text-textPrimary text-xl mb-5`}>Scrapers</h4>
              <ul className='list-disc ml-8 text-textSecondary'>
                <li>Plenty of scrapers</li>
                <li>I code scraper to help me automate my days and habits</li>
                <li>About a lot of topic : PeerBerry, TheFork, SeLoger and other websites</li>
              </ul>
              <Scrapers />
            </div>
            
            <div className='flex flex-col items-center gap-3'>
            <span className='text-textSecondary text-xs text-center'>Code from PeerBerry Boat, a PeerBerry scraper</span>
              <span className='text-textSecondary'>April - June 2023</span>
            </div>
          </div>
          <div className='rounded-r-lg w-3/4 bg-[url("/scraper.png")] bg-no-repeat bg-cover'></div>
        </div>
        <div className='keen-slider__slide min-w-[85%] flex flex-row bg-[#51513D] rounded-lg mt-10'>
          <div className='flex flex-col items-center justify-between w-2/5 my-6'>
            <div className='flex flex-col items-center'>
              <h4 className={`${inter.className} text-textPrimary text-xl mb-5`}>Loose projects / WIP</h4>
              <ul className='list-disc ml-8 text-textSecondary'>
                <li>2 mobile apps : Push-Up Calculator and Shoppist</li>
                <ol className='list-decimal ml-6 mt-1 mb-6 text-textSecondary text-sm'>
                  <li><span className='text-textPrimary'>Push-Up Calculator</span> : Created for my personal use, it calculates the number of push-ups I had to make per day based on a challenge by a friend. Coded in React Native. (loose)</li>
                  <li><span className='text-textPrimary'>Shoppist</span> : Made to help small groups like family or friends group, to centralize their shopping needs for a party or everyday life. Coded in React Native. (loose)</li>
                </ol>
                <li><span className='text-textPrimary text-lg'>Snak</span> : A tool to help businesses handle their reservations and assist in their client needs</li>
              </ul>
            </div>
            
            <div className='flex flex-col items-center gap-3'>
            <span className='text-textSecondary text-xs text-center'>Photo by <Link className='text-textPrimary underline' href="https://unsplash.com/@ffstop?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Fotis Fotopoulos</Link> on <Link className='text-textPrimary underline' href="https://unsplash.com/photos/two-black-flat-screen-computer-monitors-LJ9KY8pIH3E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</Link></span>
              <span className='text-textSecondary'>April - June 2023</span>
            </div>
          </div>
          <div className='rounded-r-lg w-3/4 bg-[url("/code.jpg")] bg-no-repeat bg-cover'></div>
        </div>
      </div>
    </div>
  )
}
