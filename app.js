const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.use( express.static(__dirname + '/client' ) );

const listener = server.listen(process.env.PORT || 5000, function(){
  console.log('Listening on port ' + listener.address().port); //Listening on port 5000
});
