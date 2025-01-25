import React from 'react'
import ComponentC from './ComponentC'

export const ComponentB = () => {
  return (
    <div className='box'>
        <h1>Component B</h1>
        <ComponentC />
        </div>
  )
}

export default ComponentB