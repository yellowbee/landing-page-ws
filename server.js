const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const expressGraphQL = require("express-graphql");
//const schema = require('./schema/schema');

let app = express();
app.use(cors());

app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // Set custom headers for CORS
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Access-Token,X-Key");
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

//app.use('/api', require('./middlewares/validateRequestToken'));
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8601");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});*/

// Auth Middleware - This will check if the token is valid
// Only the requests that start with /api/v1/* will be checked for the token.
// Any URL's that do not follow the below pattern should be avoided unless you
// are sure that authentication is not needed
//app.all('/api/v1/*', [require('./middlewares/validateRequest')]);

app.use('/', require('./routes'));

// If no route is matched by now, it must be a 404
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// middleware to parse post request body
app.use(express.json());
app.use(express.urlencoded());

// Start the server
app.set('port', process.env.PORT || 3000);

let server = app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + server.address().port);
});

