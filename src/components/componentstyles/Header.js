import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

function Header({ showSecondaryButtons }) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link className="nav-link" to={"/"}>
            <Button variant="warning">Home</Button>{" "}
          </Link>
          {showSecondaryButtons && (
            <>
              <Link to="/offer1" className="nav-link">
                <Button variant="secondary">Offer 1</Button>{" "}
              </Link>
              <Link to="/offer2" className="nav-link">
                <Button variant="secondary">Offer 2</Button>{" "}
              </Link>
              <Link to="/offer3" className="nav-link">
                <Button variant="secondary">Offer 3</Button>{" "}
              </Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
