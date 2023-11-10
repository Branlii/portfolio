import React from 'react'
import { TeamWork, List, Thinking, Client, Idea, Person, Handshake } from '../Icons'
import Chip from '../Chip'

export default function SoftSkills() {
  return (
    <div className='flex flex-row flex-wrap mx-6 my-4 gap-6'>
      <Chip
        color='purple'
        label='Team Work'
        icon={(props) => <TeamWork {...props} fill="rgb(216 180 254)" />}
      />
      <Chip
        color='white'
        label='Organzation'
        icon={(props) => <List {...props} fill="rgb(255 255 255)" />}
      />
      <Chip
        color='blue'
        label='Logic'
        icon={(props) => <Thinking {...props} fill="rgb(147 197 253)" />}
      />
      <Chip
        color='green'
        label='Client Oriented'
        icon={(props) => <Client {...props} fill="rgb(134 239 172)" />}
      />
      <Chip
        color='yellow'
        label='Taking of Initatives'
        icon={(props) => <Idea {...props} fill="rgb(253 224 71)" />}
      />
      <Chip
        color='red'
        label='Taking of Initatives'
        icon={(props) => <Person {...props} fill="rgb(252 165 165)" />}
      />
      <Chip
        color='indigo'
        label='Cooperation'
        icon={(props) => <Handshake {...props} fill="rgb(165 180 252)" />}
      />
    </div>
  )
}
