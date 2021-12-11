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
 
//cors
routes.use(cors());

//connexion au client
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://toto:Azerty@cluster-clients.naa1h.mongodb.net/clients?retryWrites=true&w=majority";
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

  routes.get("/all", (req, res) => {
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
});


//port
app.listen(PORT, () => {
  console.log(`Mon serveur écoute sur http://localhost:${PORT}`);
});

//routes
routes.get("/", (req, res) => {
  res.send("Hello World!");
});