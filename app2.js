const Logger = require('./logger');

var logger = new Logger();

logger.on('newevent',(args)=>{
    console.log('event new event emitted ',args);
});

logger.log('message');