var express = require("express");
var port = process.env.PORT || 8080;

var greetingsAPI = require("./greetings-api"); //senza ./ cerca in node_modules
var submodule = require("./submodule.js");

submodule();

var app = express();

const BASE_PATH = "/api";

//greetingsAPI.register(app, BASE_PATH);

app.get("/", (req,res) => {
   res.send("<html><body>Hello World!</body></html>");
});

//listen(port); //IMPORTANTE IL LISTEN DELLA PORTA SENNO' NON VIENE VISTA LA PAGINA



const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://Giuseppe:Giuseppe@sos-qhbyw.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

var contacts;

client.connect(err => {
  
  contacts = client.db("sos1819").collection("contacts"); //sos1819 nome della base di dati e sos nome cluster
  console.log("Connected!");
  greetingsAPI.register(app, BASE_PATH, contacts);
  app.listen(port);
});

