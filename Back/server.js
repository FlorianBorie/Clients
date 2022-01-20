const PORT = 4000;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const routes = express.Router();
app.use("/api", routes)

 
// body-parser
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());
let jsonParser = bodyParser.json();
 
//cors
routes.use(cors());

// Connexion au client
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://clienttest:Azerty33@cluster-clients.cdwsb.mongodb.net/clients?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const DATABASE = "clients"
const ObjectID = require('mongodb').ObjectId; 

// Connexion à la base de donnée
client.connect(err => {
    if(err) {
        throw Error(err);
    }
  const collection = client.db(DATABASE).collection("personnes");
  !err && console.log(`Success et connexion avec la basse de donnée`);
  const db = client.db(DATABASE).collection("personnes"); 
  // perform actions on the collection object

  // GET ALL
  routes.get("/clients", (req, res) => {
    db.find()
    .toArray()
    .then((error, results) => {
      if(error){ 
        return res.send(error); 
      }
      res.status(200).send({ results });
    })
    .catch((err) => res.send(err));
  });

  // GET ID
  routes.get("/clients/:id", (req, res) => {
    const o_id = new ObjectID(req.params.id);
    db.findOne(
      { _id: o_id })
    .then((error, results) => {
      if(error){ 
        return res.send(error); 
      }
      res.status(200).send(results);
    })
    .catch((err) => res.send(err));
  });
  
  // POST
  routes.post("/clients/add", jsonParser, function (req, res) {
    db.insertOne(req.body)
    .then(() => res.status(200).send(`L'ajout du nouveau client est fait avec success !`))
    .catch((err) => {      
      console.log(err);
      res.send(err)
    });
  })

  // UPDATE
  routes.put("/clients/:id", (req, res) => {
    const o_id = new ObjectID(req.params.id);
    db.updateOne(
      { "_id": o_id },
      { $set: {"prenom": req.body.prenom, "nom": req.body.nom, "mail": req.body.mail, "adresse": req.body.adresse }})
    .then((error, results) => {
      if(error){ 
        return res.send(error); 
      }
      res.status(200).send(results);
    })
    .catch((err) => res.send(err));
  });

  // DELETE
  routes.delete("/clients/:id", (req, res) => {
    const o_id = new ObjectID(req.params.id);
    db.deleteOne(
      { _id: o_id })
    .then((error, results) => {
      if(error){ 
        return res.send(error); 
      }
      res.status(200).send(`Suppression d'un client fait avec success !` + results);
    })
    .catch((err) => res.send(err));
  });
});

// Port
app.listen(PORT, () => {
  console.log(`Mon serveur écoute sur http://localhost:${PORT}`);
});

// Route principale
routes.get("/", (req, res) => {
  res.send("Hello World!");
});