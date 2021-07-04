module.exports = {
    get:(req,res,next)=>{
        res.json({success:true,message:"welcome"})
    },
    post:(req,res,next)=>{
        res.json({success:true,message:"welcome"})
    }
}