import React, { useState, useEffect } from 'react'

import { Container } from './styles'

interface InputContainerProps {
  label: string
  id: string
  type?: string
}

const InputContainer: React.FC<InputContainerProps> = ({
  label,
  id,
  children,
  type = 'text'
}) => {
  return (
    <Container>
      <div>
        <input type={type} id={id} required />
        <label htmlFor={id}>{label}</label>

        {children}
      </div>
    </Container>
  )
}

export default InputContainer
