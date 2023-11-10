"use client"
import { Lexend, Inter } from 'next/font/google'
import React from 'react'
import './Experiences.css'
import { Arrow } from '../Icons'
import SoftSkills from './SoftSkills'
import HardSkills from './HardSkills'

const lexend = Lexend({ subsets: ['latin'] })
const inter_thin = Inter({ subsets: ['latin'], weight: ['200'] })
const inter = Inter({ subsets: ['latin'], weight: ['400'] })

type Categeory = 'company' | 'missions' | 'skills'

export default function Experiences() {
  const [categeory, setCategeory] = React.useState<Categeory>('company')

  return (
    <div id="experiences" className='flex flex-col min-h-screen px-14 py-14'>
      <h2 className={`${lexend.className} text-textPrimary text-5xl text-shadow-md`}>Experiences</h2>
      <div className='flex flex-col px-10'>
        <div className='flex flex-col gap-4 w-1/2 py-24 pb-0'>
          <h3 className={`${lexend.className} text-textSecondary text-5xl text-shadow-md`}>Moment & Moment Care</h3>
          <span className={`${inter_thin.className} text-textSecondary text-md`}>May 2023 - Present</span>
          <h6 className={`${inter.className} text-textPrimary text-xl`}>Full-Stack Junior Developer</h6>
        </div>
        <ul className='text-[#51513D] flex flex-row gap-16 justify-center m-12'>
          <li className={`cursor-pointer ease-in-out duration-500 hover:transform-gpu hover:scale-125 hover:ease-in-out hover:duration-700 ${categeory === "company" ? 'text-textPrimary scale-125 hover:none' : 'hover:text-textSecondary'}`} id="company" onClick={(e) => setCategeory(e.target.id)}>Company</li>
          <li className={`cursor-pointer ease-in-out duration-500 hover:transform-gpu hover:scale-125 hover:ease-in-out hover:duration-700 ${categeory === "missions" ? 'text-textPrimary scale-125 hover:none' : 'hover:text-textSecondary'}`} id="missions" onClick={(e) => setCategeory(e.target.id)}>Missions</li>
          <li className={`cursor-pointer ease-in-out duration-500 hover:transform-gpu hover:scale-125 hover:ease-in-out hover:duration-700 ${categeory === "skills" ? 'text-textPrimary scale-125 hover:none' : 'hover:text-textSecondary'}`} id="skills" onClick={(e) => setCategeory(e.target.id)}>Skills</li>
        </ul>
        <>
          <div className={`flex flex-col gap-4 px-10 transform transition-transform duration-500 ease-in-out ${categeory !== 'company' && 'hidden transform transition-transform duration-500 ease-in-out'}`}>
            <span className='text-textSecondary'><Arrow width={16} fill='#E3DCC2' className='inline mb-1 mr-1' />First for my internship, I kept working for Moment on apprenticeship.</span>
            <span className='text-textSecondary'><Arrow width={16} fill='#E3DCC2' className='inline mb-1 mr-1' />Our products aim essentially long-distance public transport companies. We offer entertainment content like games, movies, series and podcasts or shop service for passengers.</span>
            <span className='text-textSecondary'><Arrow width={16} fill='#E3DCC2' className='inline mb-1 mr-1' />We work with shipping, rail and airlines companies all around the world. <span className='text-sm'>(Corsica Linea, Air France, TGV Inoui for example)</span></span>
            <span className='text-textSecondary'><Arrow width={16} fill='#E3DCC2' className='inline mb-1 mr-1' />Moment Care is another branch of our company and it aims entertainment proposal but in hospital and clinic.</span>
          </div>
          <div className={`flex flex-col gap-4 px-10 transform transition-transform duration-500 ease-in-out ${categeory !== 'missions' && 'hidden transform transition-transform duration-500 ease-in-out'}`}>
            <span className='text-textSecondary'><Arrow width={16} fill='#E3DCC2' className='inline mb-1 mr-1' />As Full-Stack Developer, I’m able to do a lot of things...</span>
            <span className='text-textSecondary'><Arrow width={16} fill='#E3DCC2' className='inline mb-1 mr-1' /> I fixed a bunch of front bugs that our clients reported to us. <span className='text-sm'>(things like media queries issues, wrong route response from API, and others)</span></span>
            <span className='text-textSecondary'><Arrow width={16} fill='#E3DCC2' className='inline mb-1 mr-1' />Even if i fix front bugs, I did repair some back problems too. For example I brought new features to our admin panels or else I resolved a compiling error of our PDF converter suing Ghostscript.</span>
            <span className='text-textSecondary'><Arrow width={16} fill='#E3DCC2' className='inline mb-1 mr-1' /> I was requested for creating a big part of our new design system. I took the design gave by the design team and I mapped it with an atomic component approach.</span>
          </div>
          <div className={`flex flex-col gap-4 px-10 transform transition-transform duration-500 ease-in-out ${categeory !== 'skills' && 'hidden transform transition-transform duration-500 ease-in-out'}`}>
            <span className='text-textSecondary'><Arrow width={16} fill='#E3DCC2' className='inline mb-1 mr-1' />Working in a professional surrounding learned me a lot of soft skills...</span>
            <SoftSkills />
            <span className='text-textSecondary'><Arrow width={16} fill='#E3DCC2' className='inline mb-1 mr-1' />However I practiced code too... </span>
            <HardSkills />
          </div>
        </>
      </div>
    </div>
  )
}
