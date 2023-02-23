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
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end">
                                <Offcanvas.Header closeButton closeVariant="white">
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="d-block white-font roboto-slab-bold  ms-auto">
                                        <Nav.Link href="#action1" className="center-vertically">
                                           General
                                        </Nav.Link>
                                        <NavDropdown
                                            title="Perfil del Developer"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <NavDropdown.Item href="#action3">Educacion</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action4">Aprendizaje de programacion</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">Experiencia</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action6">Rol del desarrollador</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action7">Territorios clave</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action8">Demografia</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown
                                            title="Tecnologia"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <NavDropdown.Item href="#action3">Lenguajes mas populares</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action4">Control de Versiones</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">Web3</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown
                                            title="Trabajo"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <NavDropdown.Item href="#action3">Situación de Empleo</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action4">Información de la Empresa</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">Salario</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown
                                            title="Desarroladores Profesionales"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <NavDropdown.Item href="#action3">Experiencia del desarrollador</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown
                                            title="Metodologia"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <NavDropdown.Item href="#action3">Feedback</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action4">Participantes</NavDropdown.Item>
                                        </NavDropdown>
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