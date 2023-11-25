import React from 'react'
import { Javascript, Typescript, React as ReactIcon, Docker, Postgresql } from '../Icons'
import Chip from '../Chip'

export default function HardSkills() {
  return (
    <div className='flex flex-row flex-wrap sm:mx-6 my-4 gap-6'>
      <Chip
        color='yellow'
        label='Javascript'
        icon={(props) => <Javascript {...props} fill="rgb(253 224 71)" />}
      />
      <Chip
        color='blue'
        label='Typescript'
        icon={(props) => <Typescript {...props} fill="rgb(147 197 253)" />}
      />
      <Chip
        color='cyan'
        label='React'
        icon={(props) => <ReactIcon {...props} fill="rgb(103 232 249)" />}
      />
      <Chip
        color='dark-blue'
        label='Docker'
        icon={(props) => <Docker {...props} fill="rgb(59 130 246)" />}
      />
      <Chip
        color='blue'
        label='PostgreSQL'
        icon={(props) => <Postgresql {...props} fill="rgb(147 197 253)" />}
      />
    </div>
  )
}
