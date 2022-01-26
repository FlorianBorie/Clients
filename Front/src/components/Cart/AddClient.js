import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AddClient.css'
import axios from 'axios';

class AddClient extends React.Component {

    state = {
        prenom: '',
        nom: '',
        mail: '',
        adresse: '',
    }

    handleChangePrenom = event => {
        this.setState({prenom: event.target.value})
    }

    handleChangeNom = event => {
        this.setState({nom: event.target.value})
    }

    handleChangeMail = event => {
        this.setState({mail: event.target.value})
    }

    handleChangeAdresse = event => {
        this.setState({adresse: event.target.value})
    }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const clients = JSON.stringify({
          prenom: this.state.prenom,
           nom: this.state.nom,
           mail: this.state.mail,
           adresse: this.state.adresse,
        });
    
        axios.post(`http://localhost:4000/api/clients/add`, clients, {
            
            "headers": {
            "content-type": "application/json",
            },})
          .then(res => {
            console.log(res);
            console.log(res.data);
            console.log(this.state)
            setTimeout(() => window.location.assign('/'), 1000)
          })

}

render() {
    return(
        <div className="shopping-list">
            <h1>Bienvenue sur la page pour ajouter des clients !</h1>
            <div className='FormAjout'>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicNom">
                        <Form.Label >Nom</Form.Label>
                        <Form.Control type="text" name="nom" onChange={this.handleChangePrenom} placeholder="Entrer votre nom" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPrenom">
                        <Form.Label >Prénom</Form.Label>
                        <Form.Control type="text" name="prenom" onChange={this.handleChangeNom} placeholder="Entrer votre prénom" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email" name="mail" onChange={this.handleChangeMail} placeholder="Entrer votre email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAdresse">
                        <Form.Label >Adresse</Form.Label>
                        <Form.Control type="text" name="adresse" onChange={this.handleChangeAdresse} placeholder="Entrer votre adresse" />
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                        Ajouter
                    </Button>
                </Form>
            </div>
        </div>
    )}
}

export default AddClient; 
