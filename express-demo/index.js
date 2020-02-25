const debug = require("debug")('app:startup')
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');
const log = require('./middleware/logger');
const autheticate = require('./middleware/authentication');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);
app.use('/',home);

app.set('view engine', 'pug');
app.set('views', './views');

console.log('My application name : ' + config.get('name'));
console.log('My mail server name : ' + config.get('mail.host'));
//console.log('My mail server password : ' + config.get('mail.password'));
debug('debug initialized');

if (app.get('env') === 'development') {
    debug('Morgan enabled.');
    app.use(morgan('tiny'));
}

app.use(log);
app.use(autheticate);




app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
})




var PORT = process.env.PORT || 3000;
PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}....`));