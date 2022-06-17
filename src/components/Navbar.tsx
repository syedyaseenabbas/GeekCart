import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height : 60px;
    background-color : black;
`

const Navbar:React.FC = () => {
  return (
    <Container>
      Hello Nav
    </Container>
  )
}

export default Navbar
