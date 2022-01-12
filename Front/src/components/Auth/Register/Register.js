import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Register.css'

function Register() {
    return (
    <div className="shopping-list">
        <h1>Inscrivez-vous !</h1>
        <div className='FormRegister'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPrenom">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="text" placeholder="Entrer votre prenom" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="Entrer votre nom" />
                </Form.Group>

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

                <Button variant="primary" type="submit">
                    S'inscrire
                </Button>
            </Form>
        </div>
    </div>
    );
}

export default Register;