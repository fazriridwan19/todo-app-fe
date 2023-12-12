import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import eagle from "../../assets/eagle.png";

const CustomNavbar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        {/* <Navbar.Brand href="../">Navbar</Navbar.Brand> */}
        <img src={eagle} height={50}></img>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/task">Todo List</Nav.Link>
          <Nav.Link href="/category">Category</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
