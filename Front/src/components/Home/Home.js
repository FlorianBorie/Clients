import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, Button} from 'react-bootstrap';
import './Home.css'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clients: [],
            id: [],
        }
    }

    componentDidMount = () =>{
        this.getClients();
    }

    getClients = () => {
        axios.get('http://localhost:4000/api/clients/all')
        .then((reponse) => {
            const data = reponse.data;
            this.setState({ clients: data});
            console.log("Data bien reçu")
            console.log(this.state.clients)
            console.log(this.state)
        })
        .catch(() => {
            alert('Error avec les datas !!')
        })
    }

    // setId = (clients) => {
    //     axios.get('http://localhost:4000/api/clients/all')
    //     .then((reponse) => {
    //         const toto = reponse.data;
    //         this.setState({ id: toto.client._id})
    //     })
    //     .catch(() => {

    //     })
    // }

    getId = (clients) =>{

        if(!clients.length) return null;

        return clients.map((client, index) => (
            this.setState({id : clients._id})
        ));
    }

    deleteClients = (client) => {
        axios.delete(`http://localhost:4000/api/clients/${this.state.id}`) 
        .then(() => {
            alert('Clients delete')
        })
        .catch(() => {
            alert('Impossible de delete whouwhou')
        })
    }

    displayClients = (clients) =>{

        if(!clients.length) return null;

        return clients.map((client, index) => (
            <div key={index} className='container'>
            <div className="row">
                <InputGroup className="col">
                    <InputGroup.Text  id="inputGroup-sizing-default" style={{marginBottom:"3%"}}>{client.prenom}</InputGroup.Text>
                </InputGroup>
                <InputGroup className="col">
                    <InputGroup.Text id="inputGroup-sizing-default" style={{marginBottom:"3%"}}>{client.nom}</InputGroup.Text>
                </InputGroup>
                <InputGroup className="col">
                    <InputGroup.Text id="inputGroup-sizing-default" style={{marginBottom:"3%"}}>{client.mail}</InputGroup.Text>
                </InputGroup>
                <InputGroup className="col">
                    <InputGroup.Text id="inputGroup-sizing-default" style={{marginBottom:"3%"}}>{client.adresse}</InputGroup.Text>
                </InputGroup>
                <div>
                <Button type="button" variant="success">Modifier</Button>
                <Button variant="danger" onClick={this.deleteClients.bind(this)}>Supprimer</Button>
                </div>
            </div>
            {/* </Link> */}
        </div>
        ));
    }

    render() {
        return(
        <div>
            <h1>Page HOME</h1>
            <div>
                {this.displayClients(this.state.clients)}
            </div>
        </div>)
    }

}

export default Home;