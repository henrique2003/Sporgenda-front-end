import React from 'react'
import './style.css'

interface Props {
  type: string
  placeholder: string
  title: string
  name?: string
  value?: string | number
  onChange: Function
  className?: string
}

const FormInput: React.FC<Props> = ({ type, placeholder, title, className }) => {
  return (
    <div className={`wrapper_input ${className ?? ''}`}>
      <header>
        <div></div><p>{title}</p>
      </header>
      <input
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default FormInput
