const {parseUploads} = require('./lib');
module.exports = {
    get:(req,res,next)=>{
        res.json({success:true, message:"image uploads service"})
    },
    post:(req,res,next)=>{
        return parseUploads(req,res,next);
    }
}