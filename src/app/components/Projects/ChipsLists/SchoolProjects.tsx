import React from 'react'
import { Javascript, Php, MySql, NodeJs, Python, Java, React as ReactIcon } from '../../Icons'
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
        color='blue'
        label='PHP'
        icon={(props) => <Php {...props} fill="rgb(147 197 253)" />}
      />
      <Chip
        color='orange'
        label='MySQL'
        icon={(props) => <MySql {...props} fill="rgb(253 186 116)" />}
      />
      <Chip
        color='green'
        label='NodeJS'
        icon={(props) => <NodeJs {...props} fill="rgb(134 239 172)" />}
      />
      <Chip
        color='blue'
        label='Python'
        icon={(props) => <Python {...props} fill="rgb(147 197 253)" />}
      />
      <Chip
        color='orange'
        label='Java'
        icon={(props) => <Java {...props} fill="rgb(253 186 116)" />}
      />
      <Chip
        color='cyan'
        label='React'
        icon={(props) => <ReactIcon {...props} fill="rgb(103 232 249)" />}
      />
    </div>
  )
}
