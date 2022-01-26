import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, Button} from 'react-bootstrap';
import './Home.css'
import { FaTrashAlt, FaPencilAlt} from "react-icons/fa";

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
        axios.get('http://localhost:4000/api/clients')
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

    deleteClients = (clientId) => {
        axios.delete(`http://localhost:4000/api/clients/${clientId}`) 
        .then(() => {
            alert('Clients delete')
            setTimeout(() => window.location.reload(), 1000)
        } )
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
                    <InputGroup.Text  id="inputGroup-sizing-default">{client.prenom}</InputGroup.Text>
                </InputGroup>
                <InputGroup className="col">
                    <InputGroup.Text id="inputGroup-sizing-default">{client.nom}</InputGroup.Text>
                </InputGroup>
                <InputGroup className="col">
                    <InputGroup.Text id="inputGroup-sizing-default">{client.mail}</InputGroup.Text>
                </InputGroup>
                <InputGroup className="col">
                    <InputGroup.Text id="inputGroup-sizing-default">{client.adresse}</InputGroup.Text>
                </InputGroup>
                <div className='btnHome'>
                    <Button style={{marginRight:"5%"}} type="button" variant="success"><FaPencilAlt /> Modifier</Button>
                    <Button variant="danger" onClick={() => this.deleteClients(client._id)}><FaTrashAlt /> Supprimer</Button>
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