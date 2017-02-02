const express = require('express');
const path = require('path');
const redis = require('./RedisController');

const app = express();
const bodyParser = require('body-parser');


app.use('/static', express.static(path.join(__dirname, '/../static')));
app.use('/static', express.static(path.join(__dirname, '/../dist')));
const jsonParser = bodyParser.json();

app.listen(5001, () => {
  console.log('Example app listening on port 5001!');
});

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './static' });
});

app.get('/api/climbs/:uid', (req, res) => {
  const callback = (error, data) => {
    res.send(data);
  };
  redis.getLoadData(req.params.uid, callback);
});

app.post('/api/settings/:uid', jsonParser, (req, res) => {
  if (req.body) {
    const topGrade = req.body.topGrade;
    const goal = req.body.goal;
    if (topGrade || goal) {
      const result = redis.saveSettings(req.params.uid, {topGrade, goal});
      if (result) {
        res.send({ result: 'success' });
        return;
      }
    }
  }
  res.send({ result: 'error' });
});


app.post('/api/climbs/:uid/date/:date', jsonParser, (req, res) => {
  const grade = req.body.grades;
  if (grade) {
    const result = redis.savePreviousDay(req.params.uid, req.params.date, grade);
    if (result) {
      res.send({ result: 'success' });
      return;
    }
  }
  res.send({ result: 'error' });
});


app.post('/api/climbs/:uid', jsonParser, (req, res) => {
  const grade = req.body.grades;
  if (grade) {
    const result = redis.saveToday(req.params.uid, grade);
    if (result) {
      res.send({ result: 'success' });
      return;
    }
  }
  res.send({ result: 'error' });
});
