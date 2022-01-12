import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css'

function Login() {
    return (
    <div className="shopping-list">
        <h1>Connectez-vous !</h1>
        <div className='FormLogin'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Entrer votre email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="Entrer votre mot de passe" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <div>
                    <a href='/forbiden'>Mot de passe oublié !</a>
                    <Button variant="primary" type="submit">
                        Valider
                    </Button>
                </div>
            </Form>
        </div>
    </div>
    );
}

export default Login;