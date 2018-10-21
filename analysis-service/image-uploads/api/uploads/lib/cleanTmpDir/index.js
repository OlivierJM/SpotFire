const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
module.exports = (destinationFolder,success,failure)=>{
        
    rimraf(destinationFolder, (err)=>{
        if(err){
            // console.log('failed to clean',err)
            return failure({reason:"an error occoured"});
        }
        // console.log('cleaned folder')
        success({done:true})
    })
}