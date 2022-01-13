import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup} from 'react-bootstrap';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            prenom: '',
            nom: '',
            mail: '',
            adresse: '',
            clients: [],
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
            console.log(this.state)
        })
        .catch(() => {
            alert('Error avec les datas !!')
        })
    }

    displayClients = (clients) =>{

        if(!clients.length) return null;

        return clients.map((client, index) => (
            <div key={index}>
                <div className="col-md-9 mt-5">
                    <InputGroup className="mb-3">
                        <InputGroup.Text  id="inputGroup-sizing-default" style={{marginBottom:"3%"}}>{client.prenom}</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" style={{marginBottom:"3%"}}>{client.nom}</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" style={{marginBottom:"3%"}}>{client.mail}</InputGroup.Text>
                    </InputGroup>
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