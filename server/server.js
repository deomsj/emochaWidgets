var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Server listening on port ' + port);
});


