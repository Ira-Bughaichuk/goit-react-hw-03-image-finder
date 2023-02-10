import React from 'react'

export default function Button({onClick,disabled}) {
  return (
      <button className="button" type="button" disabled={disabled} onClick={onClick}>Button</button>
      
  )
}
