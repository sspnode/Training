const EventEmitter = require('events');

//console.log(__filename);
//console.log(__dirname);
var url = "http://logger.log.com.log";


class Logger extends EventEmitter{
    
    log(message){
        // log message
        console.log(message);

        //Raise Event
        this.emit('newevent', {id:1,message:'log event'});
    }
    
}

// class LoggerEx{
//     log(message){
//         var logger = new Logger();
//         logger.on('newevent',(args)=>console.log('Listener received event',args));
//         logger.log(message);
//     }
// }



//exports.log = Logger;
//module.exports = LoggerEx;
module.exports = Logger;