import React from 'react'
import { Javascript, NodeJs, Puppeteer, Axios, Postman } from '../../Icons'
import Chip from '../../Chip'

export default function SchoolProjects() {
  return (
    <div className='flex flex-row flex-wrap mx-6 my-10 gap-6'>
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
        color='emerald'
        label='Puppeteer'
        icon={(props) => <Puppeteer {...props} fill="rgb(110 231 183)" />}
      />
      <Chip
        color='indigo'
        label='Axios'
        icon={(props) => <Axios {...props} fill="rgb(165 180 252)" />}
      />
      <Chip
        color='orange'
        label='Postman'
        icon={(props) => <Postman {...props} fill="rgb(253 186 116)" />}
      />
    </div>
  )
}
