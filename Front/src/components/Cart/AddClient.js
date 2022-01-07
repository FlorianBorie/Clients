import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AddClient.css'

function AddClient() {
    return (
    <div className="shopping-list">
        <h1>Bienvenue sur la page pour ajouter des clients !</h1>
        <div className='FormAjout'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicNom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="Entrer votre nom" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrenom">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="text" placeholder="Entrer votre prénom" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Entrer votre email" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAdresse">
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control type="text" placeholder="Entrer votre adresse" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Ajouter
                </Button>
            </Form>
        </div>
    </div>
    );
}

export default AddClient;