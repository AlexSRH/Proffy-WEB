import React from 'react'

import { Container } from './styles'

interface CheckboxProps {
  id: string
  label: string
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label }) => {
  return (
    <Container>
      {label}
      <input type="checkbox" name={id} id={id} />
      <span className="check-mark"></span>
    </Container>
  )
}

export default Checkbox
