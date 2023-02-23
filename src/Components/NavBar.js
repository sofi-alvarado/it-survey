import './styles/NavBar.css';
import React, {  useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


const NavBar = () => {
    const [show, setShow] = useState(false);

    //Para formulario modal
    const handleShow = () => {

        setShow(true);

    }

    return (
        <>
                {[false].map((expand) => (
                    <Navbar key={expand} expand={expand} className="mt-0 mb-3 fixed-top" 
                        id="navbar-container" >
                        <Container fluid>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="border-0" />

                            <Navbar.Offcanvas
                                scroll={true}
                                backdrop={false}
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end">
                                <Offcanvas.Header closeButton closeVariant="white">
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="d-block ms-auto">
                                        <Nav.Link href="#action1" className="">
                                           General
                                        </Nav.Link>
                                        <Nav.Link href="#action1" className="">
                                            Información Básica
                                        </Nav.Link>
                                        <Nav.Link href="#action1" className="center-vertically">
                                            Educación, Trabajo y Carrera
                                        </Nav.Link>
                                        <Nav.Link href="#action1" className="center-vertically">
                                            Tecnología y Cultura
                                        </Nav.Link>
                                        <Nav.Link href="#action1" className="center-vertically">
                                            Demografía 
                                        </Nav.Link>
                                        <Nav.Link href="#action1" className="center-vertically">
                                            Feedback
                                        </Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
                </>
    );
}

export default NavBar;