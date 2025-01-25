import React from 'react'
import Proptypes from 'prop-types'

export const Student = (props) => { 
  return (
    <div className='student'>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent? "Yes" : "No"}</p>
    </div>
  )
}

Student.roptypes = {
  name: Proptypes.string,
  age: Proptypes.number,
  isStudent: Proptypes.bool
}