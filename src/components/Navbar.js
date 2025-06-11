import { Container, Nav, Navbar } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';

function Navigator() {

    const MouseOver = (event) => {
        event.target.style.background = "lightgrey";
    }

    const MouseOut = (event) => {
        event.target.style.background = "";
    }

    const { pathname } = useLocation();

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="container-fluid">
                        <Nav.Item onMouseOver={MouseOver} onMouseOut={MouseOut}>
                            <Nav.Link as={Link} className={pathname == "/" && "active"} to="/" >Welcome</Nav.Link>
                        </Nav.Item>
                        <Nav.Item onMouseOver={MouseOver} onMouseOut={MouseOut}>
                            <Nav.Link as={Link} className={pathname == "/about" && "active"} to="/about" >About Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item onMouseOver={MouseOver} onMouseOut={MouseOut}>
                            <Nav.Link as={Link} className={pathname == "/project" && "active"} to="/project" >Projects</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Navigator;