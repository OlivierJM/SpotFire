const Busboy = require('busboy');
// const parseFile = require('../parseFile');
// const parseFields = require('../parseFields');
const parseStreams = require('../parseStreams');
const parseImage = require('../parseImage');
//import error handler
const {unsupportedContent} = require('../parseErrors');

let errors;
let success;
let uploadedFiles;
module.exports = (req,res,next)=>{
    //create busboy instance
    const busboy = new Busboy({headers:req.headers});

    //initiate error bucket
    errors = [];

    //initiate file counter
    uploadedFiles = {
        n:0
    };

    //listen to file event
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {  
        console.log(mimetype)
        //update uploaded files counter
        uploadedFiles.n++;
        //check mimetype ps. only accept video files, drop all none video files
        let type = mimetype.split("/")[0];

        switch(type){
            case "image":
                parseImage(filename,file,(data)=>{
                    console.log(data)
                },(err)=>{
                    errors.push(err);
                });
                break;
            case "video":
            let err1 = Object.assign({},unsupportedContent)
                err1.type = "video";
                err1.mimetype = mimetype;
                err1.filename=filename;
                errors.push(err1);
                // success = false;
                file.on("data",(data)=>console.log(err1));
                break;
            case "audio":
            let err2 = Object.assign({},unsupportedContent)
                err2.type = "audio";
                err2.mimetype = mimetype;
                err2.filename=filename;
                errors.push(err2);
                // success = false;
                file.on("data",(data)=>console.log(err2));
                break;
                default:
                    parseStreams(filename,file,mimetype,(data)=>{
                    
                    },(error)=>{
                        errors.push(error)
                    });
        }
    });

    //listen to field event
    busboy.on("field",(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype)=>{
      
    });

    //listen to finish event
    busboy.on('finish', function() {
        res.json({success:true,errors,uploadedFiles});
    });

    //pipe request to busboy
    req.pipe(busboy);

}