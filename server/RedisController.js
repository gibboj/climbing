class RedisController {

  static getBaseDayKey() {
    const today = new Date();
    const day = today.getDate();
    const month = (today.getMonth() + 1);
    return [`0${day}`.slice(-2),  // Get day and pad it with zeroes
      `0${month}`.slice(-2),      // Get month and pad it with zeroes
      today.getFullYear()].join('');
  }

  constructor() {
    // DATABASE STUFF
    const redis = require('redis');
    this.client = redis.createClient();

    this.client.on('error', (err) => {
      console.log(`Error ${err}`);
    });
  }

  saveSettings(uid, data) {
    if (data.topGrade) {
      this.client.set(`${uid}:topgrade`, data.topGrade);
    }

    if (data.goal) {
      this.client.hset(`${uid}:goal`, this.constructor.getBaseDayKey(), data.goal);
    }
    return this.client.bgsave();
  }

  getLoadData(uid, callback) {
    const key = this.constructor.getBaseDayKey();
    if (this.client.exists(`${uid}:climbs`)){
      this.client.multi()
        .hget(`${uid}:climbs`, key)
        .hgetall(`${uid}:climbs`)
        .hget(`${uid}:goal`, key)
        .get(`${uid}:topgrade`)
        .hgetall(`${uid}:goal`)
        .exec((err, resp) => {
          let previousClimbs = [];
          let goal = 0;
          for (let day in resp[1]) {
            goal = resp[4][day] ? parseInt(resp[4][day], 10) : goal;
            previousClimbs.push({day: day, climbs: resp[1][day].split(','), goals: goal});
          }
          callback(err, [resp[0], previousClimbs, resp[2], resp[3]]);
        });
    } else {
      this.callback('error', null);
    }
  }

  saveToday(uid, data) {
    return this.saveGrade(uid, this.constructor.getBaseDayKey(), data);
  }

  savePreviousDay(uid, date, data) {
    return this.saveGrade(uid, date, data);
  }

  saveGrade(uid, key, data) {
    this.client.hset(`${uid}:climbs`, key, data.join(','));
    return this.client.bgsave();
  }
}

module.exports = new RedisController();
