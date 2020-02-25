const path = require('path');
const logger = require('./logger');
const os = require('os');


logger.log('Hello World !');

var pathobj = path.parse(__filename);
console.log(pathobj);


var freeMem = os.freemem();
var totalMem = os.totalmem();

console.log(` Free memory is ${freeMem} and Total memeory is ${totalMem} `);

const fs = require('fs');
var files = fs.readdirSync('./');
console.log(files);


//usng async and call back

fs.readdir('./',function(err,files){
    console.log(files);
})

fs.readdir('./',(err,files)=>console.log(files));