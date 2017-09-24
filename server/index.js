var express = require('express');
var morgan = require('morgan');
var app = express();

var bodyParser = require('body-parser');
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));
app.use(morgan('dev'));
app.post('/repos/import', function (req, res) {
  // TODO
  var username=Object.keys(req.body)[0]
  console.log(req.body)
  // var username = req.body;

  res.send();
});

app.get('/repos', function (req, res) {
  // TODO
  console.log('rerpos get')

  res.send('done');
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

