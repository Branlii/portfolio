import React from 'react'
import { Javascript, NodeJs, Mongodb, Puppeteer, React as ReactIcon } from '../../Icons'
import Chip from '../../Chip'

export default function SchoolProjects() {
  return (
    <div className='hidden lg:flex flex-row flex-wrap mx-6 my-10 gap-6'>
      <Chip
        color='yellow'
        label='Javascript'
        icon={(props) => <Javascript {...props} fill="rgb(253 224 71)" />}
      />
      <Chip
        color='green'
        label='NodeJS'
        icon={(props) => <NodeJs {...props} fill="rgb(134 239 172)" />}
      />
      <Chip
        color='dark-green'
        label='MongoDB'
        icon={(props) => <Mongodb {...props} fill="rgb(34 197 94)" />}
      />
      <Chip
        color='emerald'
        label='Puppeteer'
        icon={(props) => <Puppeteer {...props} fill="rgb(110 231 183)" />}
      />
      <Chip
        color='cyan'
        label='React'
        icon={(props) => <ReactIcon {...props} fill="rgb(103 232 249)" />}
      />
    </div>
  )
}
