import '../App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="logobg">
                    <Container fluid>
                        <Link to="/">
                            <img src=' https://kimsojeongg.github.io/react_project/img/hairound_logo.png' alt='logo'></img>
                        </Link>
                        <Link to="/" className='message'>
                            <img src=' https://kimsojeongg.github.io/react_project/img/message.png' alt='message'></img>
                        </Link>
                        <Link to="/" className='person'>
                            <img src=' https://kimsojeongg.github.io/react_project/img/person.png' alt='person'></img>
                        </Link>
                        <Navbar.Toggle id='toggle' /* aria-controls={`offcanvasNavbar-expand-${expand}`} */ />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    hairound
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#">홈</Nav.Link>
                                    <Nav.Link href="#">체험단</Nav.Link>
                                    <Nav.Link href="#">M스타일</Nav.Link>
                                    <Nav.Link href="#">예약</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
};

export default Header;