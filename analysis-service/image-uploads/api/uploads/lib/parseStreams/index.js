const fs = require('fs');
const path = require('path');
const OS = require('os');

const inspectStream = require('../inspectStream');

const {unsupportedContent, other} = require('../parseErrors');

module.exports = (filename,fileStream,mimetype,success,failure)=>{
    // console.log('parse streams..')
    //check type of stream
    let type = mimetype.split("/")[1];
    switch(type){
        case "octet-stream":
            // console.log('octet-stream...')
            fs.mkdtemp(path.join(OS.tmpdir(),`${filename}-`), (err,pathToFile)=>{

                //write file to temp file
                // console.log('temp file created...')
                // console.log(pathToFile)
                let folder = pathToFile.split("/tmp/")[1];
                // console.log(folder);
                fileStream.pipe(fs.createWriteStream(path.join(OS.tmpdir(),`${path.sep}${folder}${path.sep}${filename}`))).on("finish",()=>{
                    inspectStream(pathToFile,filename,success,failure);
                })
            })
            break;
            default:
                // console.log('other...')
                failure({reason:"unsupported content"})
    }
}