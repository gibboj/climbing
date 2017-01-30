var express = require('express');
var path = require('path');
var redis = require('./RedisController');
var app = express();
var bodyParser = require('body-parser');


app.use('/static', express.static(path.join(__dirname, '/../static')));
app.use('/static', express.static(path.join(__dirname, '/../dist')));
var jsonParser = bodyParser.json()

app.listen(5001, function () {
  console.log('Example app listening on port 5001!')
});

app.get('/', function(req, res){
  res.sendFile('index.html', {root: './static'});
});

app.get('/api/climbs/:uid', function(req, res){
  let callback = function (error, data) {
    res.send(data);
  };
  redis.getLoadData(req.params.uid, callback);
});


app.post('/api/climbs/:uid/date/:date',jsonParser, function (req, res) {
  let grade = req.body.grades;
  if (grade) {
    let result = redis.savePreviousDay(req.params.uid, req.params.date, grade);
    if (result) {
      res.send({'result': 'success'});
      return;
    }
  }
  res.send({'result': 'error'});
});


app.post('/api/climbs/:uid',jsonParser, function (req, res) {
  let grade = req.body.grades;
  if (grade) {
    let result = redis.saveToday(req.params.uid, grade);
    if (result) {
      res.send({'result': 'success'});
      return;
    }
  }
  res.send({'result': 'error'});
});
