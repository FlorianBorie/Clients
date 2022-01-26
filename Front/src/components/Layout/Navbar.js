import React from "react";
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import useAuthentication from '../../lib/hooks/useAuthentication/index';

// Pages
import Home from '../Home/Home';
import AddClient from "../Cart/AddClient";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import  Contact  from "../Auth/Login/Contact";
import PutClient from "../Pages/PutClient";

function NavBar() {
    // const token = localStorage.getItem('app-token');
    // const { url, ...others } = config;
    
    const state = {
        isAuthenticated: null
    }
    
    const { handleUserLogout } = useAuthentication();
    const logout = () => {
        handleUserLogout();
        setTimeout(() => window.location.assign('/'), 1000)
    }

    // const isAuth = () => {
    //     if (token) {
    //         this.setState({isAuthenticated:true});
    //     } else {
    //         this.setState({isAuthenticated:false});
    //     }
    // }

    // componentDidMount = () => (
    //     isAuth
    // )

    // if (state.isAuthenticated === null) {
    //     // Loading
    //     return (
    //         <div>
    //             <BrowserRouter>
    //             <div>
    //                 <Routes>
    //                     <Route exact path='/register' element={<Register/>}/>
    //                     <Route exact path='/' element={<Login/>}/>
    //                     {/* <Route exact path='/' element={<Home/>}/>
    //                     <Route exact path='/add' element={<AddClient/>}/> */}
    //                     {/* <Route exact path='/forbidden' element={<Contact/>}/> */}
    //                     {/* <Route exact path='/register' element={<Register/>}/>
    //                     <Route exact path='/login' element={<Login/>}/> */}
    //                 </Routes>
    //             </div>
    //         </BrowserRouter>
    //         </div>
    //     )
    //   } 
    // if (state.isAuthenticated) {
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
                        <Button onClick={logout}>Déconnexion</Button>
                    </Navbar>
                    <Routes>
                        <Route exact path='/register' element={<Register/>}/>
                        <Route exact path='/login' element={<Login/>}/>
                        <Route exact path='/' element={<Home/>}/>
                        <Route exact path='/add' element={<AddClient/>}/>
                        <Route exact path='/put' element={<PutClient/>}/>
                        {/* <Route exact path='/forbidden' element={<Contact/>}/> */}
                        {/* <Route exact path='/register' element={<Register/>}/>
                        <Route exact path='/login' element={<Login/>}/> */}
                    </Routes>
                </div>
            </BrowserRouter>
        );
    // } else {
    //         return ( 
    //         <BrowserRouter>
    //             <div>
    //                 <Routes>
    //                     <Route exact path='/register' element={<Register/>}/>
    //                     <Route exact path='/' element={<Login/>}/>
    //                     {/* <Route exact path='/' element={<Home/>}/>
    //                     <Route exact path='/add' element={<AddClient/>}/> */}
    //                     {/* <Route exact path='/forbidden' element={<Contact/>}/> */}
    //                     {/* <Route exact path='/register' element={<Register/>}/>
    //                     <Route exact path='/login' element={<Login/>}/> */}
    //                 </Routes>
    //             </div>
    //         </BrowserRouter>
    //         );
    //       }
}
export default NavBar;