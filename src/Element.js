import React from 'react'

const ElementComponent = (props) => {
  return (
    <div>
        <h1>I am an element returned from a component, my name is {props.name}</h1>
        {props.children}
    </div>
   
  )
}

export default ElementComponent