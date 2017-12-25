const compression = require('compression');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use('/sketches', express.static('sketches'));
app.use('/static', express.static('static'));
// app.use('/', express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

//app.get('/service-worker.js', (req, res) => res.sendFile(__dirname + '/service-worker.js'))
//app.get('/manifest.json', (req, res) => res.sendFile(__dirname + '/manifest.json'))
//app.get('/asset-manifest.json', (req, res) => res.sendFile(__dirname + '/asset-manifest.json'))
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(process.env.PORT || 3000, () => console.log('App listening!'))