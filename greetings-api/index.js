var api = require("./v1");
module.exports =  {
    register : function(app, BASE_PATH, contacts){
        api(app, BASE_PATH+"/v1", contacts);
    },
    configure : function(){
        //...
    }
    
};
