import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
export function GuestNavigation() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
        <Container>
            <Nav className="me-auto">
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="/about">About Me</Nav.Link>
                <Nav.Link href="/blogs">Blog</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
 </div>
  )
}

export function AdminNavigation() {
    return (
      <div>
      <Navbar bg="dark" variant="dark">
          <Container>
              <Nav className="me-auto">
                  <Nav.Link href="">Home</Nav.Link>
                  <Nav.Link href="/about">About Me</Nav.Link>
                  <Nav.Link href="/blogs">Blog</Nav.Link>
              </Nav>
          </Container>
      </Navbar>
   </div>
    )
}
