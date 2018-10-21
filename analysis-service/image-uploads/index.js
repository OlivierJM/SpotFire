require('dotenv').config();
const express = require('express');
const {ServiceBroker} = require('moleculer');
const APIGwService = require('moleculer-web');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const createError = require('http-errors');
require('./lib/db/').db

//import database
const db  = require('./lib/db').db.connectDbServer;

//initialize database
db(function(err){
    //catch db errors
    if(err){
        return process.exit(1);
    }

// import routes
const routes = require('./api');


//import configurations
const config = require('./config');

//create express app
const app = express();

//create moleculer broker
const broker = new ServiceBroker(config.broker);

//create service
config.service.mixins.push(APIGwService);
    //create middleware
config.service.settings.use.push(routes);


const svc = broker.createService(config.service);

//create middleware
app.use(cors());
app.use('/api/v1',svc.express());
//catch 404 errors
app.use(function(req,res,next){
    next(createError(404, {}, {success:false, code:404}))
})

//catch errors
app.use(function(err,req,res,next){
    // console.log('error',err)
    res.status(err.code || 500);
    res.json({
        status:err.code,
        message:err.code===404 ? "page not found" : err.message,
        success:false
    })
})


app.listen(3080,()=>console.log('server started on port 3080'));

broker.start()
})