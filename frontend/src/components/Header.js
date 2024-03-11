import React from "react";
import styled from 'styled-components';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa';


const HeaderBlock = styled.div`

`;

const Header = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                fsdasd
            </Container>
            <Container>
                <Navbar.Brand href="#">Your Brand</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Blog</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Contacts</Nav.Link>
                        <Nav.Link href="#"><FaUser /></Nav.Link>
                        <Nav.Link href="#"><FaShoppingCart /></Nav.Link>
                        <Nav.Link href="#"> <FaHeart /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Header