import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Container>
          <NavbarBrand href="/">Weather°</NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
        </Container>
      </Navbar>

    </>
  );
}
