module.exports = function(app, BASE_PATH, contacts) { //nome variabile che viene poi presa dal modulo principale
    console.log("Registering greetings-API (v1)....");
    
    var path = "";
    
    path = BASE_PATH + "/hello";
    console.log("Registering get " + path + "...");
    
    app.get(path, (req,res)=>{
        
    
    contacts.find({}).toArray((err,contactsArray)=>{ //per prendere tutti gli elementi della base di dati e metterli in un array
        
        if(err)
            console.log("Error: "+err);
        
        res.send(contactsArray);        
    });

});
    
    console.log("get /hello registered");
    


    path = BASE_PATH + "/bye";
    console.log("Registering get " + path + "...");

    app.get(path, (req,res) => {
        res.send("My bye world from my submodule");
    });
    console.log("get /bye registered");

    console.log("Greetings API registered");
};