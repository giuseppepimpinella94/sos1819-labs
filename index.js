var express = require("express");
var bodyParser = require("body-parser");


const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://test:test@sos-qhbyw.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

var contacts;

client.connect(err => {
  contacts = client.db("sos1819").collection("contacts"); //sos1819 nome della base di dati e sos nome cluster
  console.log("Connected!");
});

var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.get("/contacts", (req,res)=>{
    
    contacts.find({}).toArray((err,contactsArray)=>{ //per prendere tutti gli elementi della base di dati e metterli in un array
        
        if(err)
            console.log("Error: "+err);
        
        res.send(contactsArray);        
    });

});


// POST /contacts/

app.post("/contacts", (req,res)=>{
    
    var newContact = req.body;
    
    contacts.insert(newContact);
    
    res.sendStatus(201);
});


app.listen(port, () => {
    console.log("Super server ready on port " + port);
});