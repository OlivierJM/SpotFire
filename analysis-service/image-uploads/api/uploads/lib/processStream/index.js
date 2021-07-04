const {other} = require('../../../../lib/db/buckets');
const fs = require('fs');
const path = require('path');
const cleanTmpDir = require('../cleanTmpDir');
module.exports = (destinationFolder,destinationFile,filename,metadata,success,failure)=>{
    const DBStreamOut = other.openUploadStream(filename,{metadata});
    const DBStreamIn = fs.createReadStream(destinationFile);

    //stream file to database
    DBStreamIn.pipe(
        DBStreamOut.on("error",(err)=>{
            failure({reason:"an error streaming file, plese try again later"});
        })
        ).on("finish",()=>{
           //done streaming file to database, remove files
           cleanTmpDir(destinationFolder,success,failure);
        })

}