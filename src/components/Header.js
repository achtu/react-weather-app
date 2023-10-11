import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import Home from "../pages/Home";


import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Container>
          <NavbarBrand href="/">Weather°</NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
        </Container>
      </Navbar>

      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
       
          
        </Routes>
      </Router>
    </>
  );
}
