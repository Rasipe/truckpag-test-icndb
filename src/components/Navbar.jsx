import { Navbar } from "react-bootstrap";

function TNavbar() {

    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <div className="p-3">
                    <Navbar.Brand className="text-light">Piadas do Chuck Norris</Navbar.Brand>
                    <Navbar.Toggle className="text-light" aria-controls="basic-navbar-nav" />
                </div>
            </Navbar>
        </div>
    )
}

export default TNavbar;