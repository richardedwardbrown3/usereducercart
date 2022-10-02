import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg="dark" varient="dark" style={{ height: 80}}>
      <Container>
        <Navbar.Brand>
          <a href='/'>shopping cart</a>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header