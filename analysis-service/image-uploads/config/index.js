// const routes = require('../api');
module.exports = {
    service:{
        mixins:[],
        name:"image-uploads",
        settings:{
            ip:"0.0.0.0",
            port:5080,
            use:[]
        }
    },
    broker:{
        namespace:"dev",
        nodeID:"image-uploads-service",
        transporter:"redis"

    }
}