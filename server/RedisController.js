class RedisController {

  constructor() {
    // DATABASE STUFF
    const redis = require('redis');
    this.client = redis.createClient(); //creates a new client

    this.client.on('error', function (err) {
      console.log('Error ' + err);
    });

  }
  getBaseDayKey(uid) {
    const today = new Date();
    return [('0' + today.getDate()).slice(-2),  // Get day and pad it with zeroes
      ('0' + (today.getMonth()+1)).slice(-2),      // Get month and pad it with zeroes
      today.getFullYear()].join('');
  }

  getAllDays(uid, callback) {
    this.client.hgetall(uid+':climbs', function (resp) {
      res.send(resp);
    })
  }

  getLoadData(uid, callback) {
    const key = this.getBaseDayKey();
    if (this.client.exists(uid+':climbs')){
      this.client.multi()
        .hget(uid+':climbs', key)
        .hgetall(uid + ':climbs')
        .exec(function(err, resp) {
          let previousClimbs = [];
          for (let day in resp[1]) {
            previousClimbs.push({day: day, climbs: resp[1][day].split(',')});
          }
          resp[1] = previousClimbs;
          callback(err, resp);
        });
    } else {
      this.callback('error', null);
    }
  }

  saveToday(uid, data) {
    const key = this.getBaseDayKey();
    return this.saveGrade(uid, key,data);
  }


  savePreviousDay(uid, date, data) {
    //TODO :validate date
    const key =  date;
    return this.saveGrade(uid, key, data);
  }

  saveGrade(uid, key, data) {
    this.client.hset(uid + ':climbs', key, data.join(','));
    return this.client.bgsave();
  }
}

module.exports = new RedisController;
