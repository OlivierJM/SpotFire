
const createError = require('http-errors');

const authourization = (req,res,next)=>{
    let auth = req.headers["authorization"];
    if (auth && auth.startsWith("Bearer")) {
        let token = auth.slice(7);

        // Check the token
        if (token == "123456") {

            return next()

        } else {
            // Invalid token
            return next()
        }

    } else {
        // No token
        return next(createError(403));
    }
}


module.exports = (req,res,next)=>{
    switch(req.url){
        case '/api/auth/login':
            next();
            break;
        case '/api/auth/register':
            next();
            break;
        case '/':
            next();
            break;
        default:
            return authourization(req,res,next);
    }
}