import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class NavbarNavigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar style={navBarSpacingStyle}>
          <Navbar.Header>
            <Navbar.Brand href='#'>
              <img src={require("./logo.png")} alt=''/>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav style={navBarStyle}>
            <NavItem eventKey={1} href="#" style={{marginRight: 15}}>
              Home
            </NavItem>
            <NavItem eventKey={2} href="#">
              Account
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
const navBarStyle = {
  flexDirection: 'row',
}
const navBarSpacingStyle ={
  marginBottom: 50,
  backgroundColor: 'white'
}
export default NavbarNavigation;