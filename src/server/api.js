// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');

const app = express();
app.use(helmet());
app.use(compression());
//app.set('view engine', 'ejs');
//const HOST = process.env.API_HOST || 'localhost';
const PORT = process.env.API_PORT || 8080;

app.get('/api/v1/endpoint', (req, res) => {
    res.json({ success: true });
});
// set the home page route
//app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    //res.render('index');
//});

app.listen(PORT, () =>
    console.log(
        `✅  API Server started: `
    )
);
