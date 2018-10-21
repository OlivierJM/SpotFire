const fs = require('fs');
const path = require('path');
const OS = require('os');

const inspectStream = require('../inspectStream');

const {unsupportedContent, other} = require('../parseErrors');

module.exports = (filename,fileStream,success,failure)=>{
 
    fs.mkdtemp(path.join(OS.tmpdir(),`${filename}-`), (err,pathToFile)=>{

        let folder = pathToFile.split("/tmp/")[1];
        fileStream.pipe(fs.createWriteStream(path.join(OS.tmpdir(),`${path.sep}${folder}${path.sep}${filename}`))).on("finish",()=>{
            
            inspectStream(pathToFile,filename,success,failure);
        })
    })
}