import React from "react";
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// Pages
import Home from '../Home/Home';
import AddClient from "../Cart/AddClient";

function NavBar() {
    return (
        <BrowserRouter>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Clients</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/add">Ajouter</Nav.Link>
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/add' element={<AddClient/>}/>
                    {/* <Route exact path='/register' element={<Register/>}/>
                    <Route exact path='/login' element={<Login/>}/> */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default NavBar;