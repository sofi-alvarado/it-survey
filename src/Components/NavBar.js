import './styles/NavBar.css';
import React, { useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-scroll";


const NavBar = () => {
    //const [y, setY] = useState(window.scrollY);
    const [sidebarOpen, toggleSidebar] = useState(false);


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
                                    <Link onClick={() => toggleSidebar(!sidebarOpen)}
                                        className="nav-link"
                                        to="general"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}>
                                        General
                                    </Link>
                                    <Link onClick={() => toggleSidebar(!sidebarOpen)}
                                        className="nav-link"
                                        to="basic-info"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}>
                                        Información Básica
                                    </Link>
                                    <Link onClick={() => toggleSidebar(!sidebarOpen)}
                                        className="nav-link"
                                        to="education-info"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}>
                                        Educación, Trabajo y Carrera
                                    </Link>
                                    <Link onClick={() => toggleSidebar(!sidebarOpen)}
                                        className="nav-link"
                                        to="tecnology"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}>
                                        Tecnología y Cultura
                                    </Link>
                                    <Link onClick={() => toggleSidebar(!sidebarOpen)}
                                        className="nav-link"
                                        to="demography"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}>
                                        Demografía
                                    </Link>
                                    <Link onClick={() => toggleSidebar(!sidebarOpen)}
                                        className="nav-link"
                                        to="general"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}>
                                        Feedback
                                    </Link>
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