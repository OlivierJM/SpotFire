const {ffprobe} = require('../ffmpeg');
const path = require('path');
const processStream = require('../processStream');
const cleanTmpDir = require('../cleanTmpDir');
module.exports = (destinationFolder,filename,success,failure)=>{
    // console.log('inspect stream...')
    let pathToFile = `${destinationFolder}${path.sep}${filename}`;
    ffprobe(pathToFile,(data)=>{
        codec_type = data.streams[0].codec_type;
        // console.log(data)
        switch(codec_type){
            case "video":
                processStream(destinationFolder,pathToFile,filename,data,success,failure);
                break;
                default:
                    failure({reason:"unsported media format"})
        }
    },(err)=>{
        cleanTmpDir(destinationFolder,success,failure);
    })   
}