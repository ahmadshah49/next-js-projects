import React from 'react'
import "./button.css"
const Button = (props) => {
  return (
    <div>
      <button>{props.title}</button>
    </div>
  )
}

export default Button
