import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Cart/AddClient'
import axios from 'axios';

class PutClient extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        clients: [],
        id: [],
    }
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
      
    // handleSubmit = event => {
    //   event.preventDefault();

    //   const clients = JSON.stringify({
    //     prenom: this.state.prenom,
    //       nom: this.state.nom,
    //       mail: this.state.mail,
    //       adresse: this.state.adresse,
    //   });
    // }

    componentDidMount = () =>{
      this.getClients();
    }
      
    // getClients = () => {
    //   axios.get(`http://localhost:4000/api/clients`)
    //   .then((reponse, req) => {
    //     const data = reponse.data;
    //     this.setState({ clients: data});
    //     console.log("Data bien reçu")
    //     console.log(this.state.clients)
    //     // const dataId = this.state.clients
    //   })
    //   .catch(() => {
    //       alert('Error avec les datas !!')
    //   })
    // }

    handleSubmit = (event, clientId) => {
      event.preventDefault();
  
      const clients = JSON.stringify({
          prenom: this.handleChangePrenom,
          nom: this.handleChangeNom,
          mail: this.handleChangeMail,
          adresse: this.handleChangeAdresse,
      });
      axios.put(`http://localhost:4000/api/clients/${clientId}`, clients, {
        "headers": {
          "content-type": "application/json",
          },})
        .then(() => {

        })
        .catch(() => {
          alert('Alllo la police')
        })
  
      }

    getClients = () => {
      axios.get(`http://localhost:4000/api/clients`)
      .then((reponse, req) => {
          const data = reponse.data;
          this.setState({ clients: data});
          console.log("Data bien reçu")
          console.log(this.state.clients)
          // const dataId = this.state.clients
      })
      .catch(() => {
          alert('Error avec les datas !!')
      })
  }

    displayClients = (clients) =>{

      if(!clients.length) return null;

      return clients.map((client, index) => (
        <div key={index} className='container'>
          <div className="shopping-list">
          <h1>Modifier</h1>
          <div className='FormAjout'>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicNom">
                  <Form.Label >Nom</Form.Label>
                  <Form.Control type="text" name="nom" onChange={this.handleChangePrenom} placeholder={client.nom} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPrenom">
                  <Form.Label >Prénom</Form.Label>
                  <Form.Control type="text" name="prenom" onChange={this.handleChangeNom} placeholder={client.prenom} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label >Email</Form.Label>
                  <Form.Control type="email" name="mail" onChange={this.handleChangeMail} placeholder={client.mail} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAdresse">
                  <Form.Label >Adresse</Form.Label>
                  <Form.Control type="text" name="adresse" onChange={this.handleChangeAdresse} placeholder={client.adresse} />
              </Form.Group>
          
              <Button variant="primary" type="submit" onClick={() => this.handleSubmit(client._id)}>
                  Modifier
              </Button>
            </Form>
          </div>
        </div>
        </div>
      ));
    }

  render() {
    return(
    <div>
        <div>
            {this.displayClients(this.state.clients)}
        </div>
    </div>)
  }
}   


export default PutClient; 
