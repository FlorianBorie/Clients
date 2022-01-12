import React from "react";
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Pages
import Home from '../Home/Home';
import AddClient from "../Cart/AddClient";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";

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
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route exact path='/register' element={<Register/>}/>
                    <Route exact path='/login' element={<Login/>}/>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/add' element={<AddClient/>}/>
                    <Route exact path='/forbiden' element={forbiden()}/>
                    {/* <Route exact path='/register' element={<Register/>}/>
                    <Route exact path='/login' element={<Login/>}/> */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}
function forbiden(){
    return(
        <div>
            <h1>Vous avez oublié votre mot de passe !</h1>
            <Form className='FormLogin'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mettez votre mail</Form.Label>
                    <Form.Control type="email" placeholder="Entrer votre email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                        Valider
                </Button>
            </Form>

        </div>
    )
}
export default NavBar;