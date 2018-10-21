const ffmpeg = require('fluent-ffmpeg');



module.exports = {
    ffprobe:(i,suceess,failure)=>{
        return ffmpeg(i).ffprobe((err,data)=>{
            if(err){return failure(err)}
            return suceess(data);
        })
    }, 

    ffmpeg:(i,o,suceess,failure)=>{
        return ffmpeg().input(i).output(o).run()
    }
}