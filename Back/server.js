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

//connexion au client
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://clienttest:Azerty33@cluster-clients.cdwsb.mongodb.net/clients?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const DATABASE = "clients"

//connexion à la base de donnée
client.connect(err => {
    if(err) {
        throw Error(err);
    }
  const collection = client.db(DATABASE).collection("personnes");
  !err && console.log(`Success et connexion avec la basse de donnée`);
  const db = client.db(DATABASE).collection("personnes"); 
  // perform actions on the collection object

  // GET ALL
  routes.get("/clients/all", (req, res) => {
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
  // routes.get("/clients/:id", (req, res) => {
  //   db.findOne({ },
  //     { prenom: 1, nom: 1 })
  //   .then((error, results) => {
  //     if(error){ 
  //       return res.send(error); 
  //     }
  //     res.status(200).send({ results });
  //   })
  //   .catch((err) => res.send(err));
  // });
  
  // POST
  routes.post("/clients/add", jsonParser, function (req, res) {
    db.insertOne(req.body)
    .then(() => res.status(200).send(`L'ajout du nouveau client est fait avec success !`))
    .catch((err) => {      
      console.log(err);
      res.send(err)
    });
  })
});

//port
app.listen(PORT, () => {
  console.log(`Mon serveur écoute sur http://localhost:${PORT}`);
});

//routes
routes.get("/", (req, res) => {
  res.send("Hello World!");
});