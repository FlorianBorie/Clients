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
 
app.listen(PORT, () => {
  console.log(`Mon serveur écoute sur http://localhost:${PORT}`);
});
 
routes.get("/", (req, res) => {
  res.send("Hello World!");
});
 
routes.get("/all", (req, res) => {
    res.send("Liste des clients");
});