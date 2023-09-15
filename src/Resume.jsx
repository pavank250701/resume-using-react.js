import React from 'react'
import './resume.css'
import Gridone from './Gridone'
import Gridtwo from './Gridtwo'

function Resume() {
  return (
    <div className='bg-container'>
      <div className='page'>
        <div className='grids'>
          <Gridone />
          <div className='line'></div>
          <Gridtwo />
        </div>
      </div>
    </div>
  )
}

export default Resume