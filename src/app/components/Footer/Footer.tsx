import React from 'react'
import { Github, Instagram, Linkedin } from '../Icons'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='w-full fixed bottom-0 flex flex-row justify-between px-12 py-7'>
      <div className='flex flex-row justify-between w-44'>
        <Link href='https://github.com/Branlii?tab=repositories'>
          <Github width={40} fill='#E3DCC2' className='transition ease-in-out duration-300 hover:fill-textPrimary'/>
        </Link>
        <Link href='https://www.instagram.com/raphael__glt/'>
          <Instagram width={40} fill='#E3DCC2' className='transition ease-in-out duration-300 hover:fill-textPrimary'/>
        </Link>
        <Link href='https://www.linkedin.com/in/raphael-guillot-developpeur-web-fullstack/'>
          <Linkedin width={40} fill='#E3DCC2' className='transition ease-in-out duration-300 hover:fill-textPrimary'/>
        </Link>
      </div>
      <Link href='mailto:guillot.raphael11@gmail.com'>
        <span className='text-textSecondary transition ease-in-out duration-300 hover:text-textPrimary'>guillot.raphael11@gmail.com</span>
      </Link>
    </footer>
  )
}
