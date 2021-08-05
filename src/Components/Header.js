import React from 'react'
import { Navbar,NavDropdown,Image } from 'react-bootstrap'


function Header() {
    return (
            <Navbar  expand="lg" className="header-nav">
                <NavDropdown title="Select Bill Period" id="navbarScrollingDropdown" className="header-navdrop">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            {/* <img src={require("../Images/verizon_logo1.jpg").default} style={{}}></img> */}
            <Navbar.Brand className="ml-auto header-text">Invoice Dashboard<Image src={require("../Images/verizon_logo1.jpg").default} /></Navbar.Brand>

            </Navbar>
    )
}

export default Header
