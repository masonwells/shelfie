const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

//massive
massive( process.env.CONNECTION_STRING ).then( db => {
  app.set('db', db)
  console.log(process.env.CONNECTION_STRING)
}).catch( err => console.log(err) );

//endpoints
app.get( '/api/inventory', controller.get_inventory);
app.put( '/api/product/:id', controller.update );
app.post( '/api/product', controller.create);
app.delete( '/api/product/:id', controller.delete );


const port = process.env.PORT;
app.listen(port, ()=> {console.log('Server is listening on port:' + port)})