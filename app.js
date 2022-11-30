const express = require('express');
const app = express();
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs');
const cors = require("cors");
const bodyParser=require('body-parser');
const router = require('./src/router');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(cors());

app.use('/users', router);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));

app.listen(8081, () => {
    console.log('Server Start on Port 8081');
})

