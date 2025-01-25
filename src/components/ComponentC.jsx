import React, {useContext} from 'react'
import { UserContext } from './ComponentA'
import ComponentD from './ComponentD'

export const ComponentC = () => {
  const user = useContext(UserContext) 

  return (
    <div className='box'>
        <h1>Component C</h1>
        <h2>{`Hello Again ${user}`}</h2>
        <ComponentD />
        </div>
  )
}

export default ComponentC