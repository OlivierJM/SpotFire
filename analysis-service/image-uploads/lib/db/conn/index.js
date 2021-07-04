const mongodb = require('mongodb');
let _db;

const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;



  
    module.exports = {
        connectDbServer:function(cb){
            mongodb.MongoClient.connect(uri,{useNewUrlParser:true}, function(err,client){
                if(err){
                    console.log(err);
                    process.exit(1);
                }
        
               _db = client.db(`${process.env.DB_NAME}`);
                

                return cb(err);
            });
        },

        getDB:function(){return _db;}
    };