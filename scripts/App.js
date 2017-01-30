import React, { Component } from 'react';
import $ from 'webpack-zepto';
import { LineChart, Line, XAxis, YAxis} from 'recharts';
require("./../static/scss/base.scss");


class Grade extends Component {
  constructor(props) {
    super(props);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  decrementCount(amt) {
    this.props.onChange(this.props.num, -1);
  }

  incrementCount(amt) {
    this.props.onChange(this.props.num, 1);
  }

  render () {
    return (
       <div className="counter">
         <span>V{this.props.num} &nbsp;</span>
         <span> {this.props.count}  &nbsp;</span>
         <a className="button" onClick={this.incrementCount} id="addButton">+</a>
         <a className="button" onClick={this.decrementCount} id="minusButton">-</a>
       </div>
     )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counts:[],
      sum:0,
      topGrade:6,
      uid:1,
      today: '',
      previous:[],
      formattedPrevious:[]
    };
    this.updateCount = this.updateCount.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.saveGrades = this.saveGrades.bind(this);
  }

  sumCounts(counts) {
    let sum = 0;
    for (let grade in counts) {
      sum += grade * counts[grade];
    }
    return sum;
  }

  componentDidMount() {
    var self = this;
    let url = '/api/climbs/'+this.state.uid;
    $.ajax({
      url:url,
      contentType: 'application/json',
      type: "GET",
      success:function (res) {
        let state = {};
        if (res[0] && res[0].length > 0) {
          state.counts = res[0].split(',');
        }  else {
          state.counts=[];
          for (let i=0; i < self.state.topGrade; i++) {
            state.counts.push(0);
          }
        }

        if(typeof res[1]) {
          state.previous = res[1];
          state.formattedPrevious = self.formatPreviousGraph(state.previous);
        }

        self.setState(state);
      }
    });
  }
  formatPreviousGraph (previous) {
    let data = [];
    previous.map(function(climbs, index) {
      let sum = 0;
      var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];
      climbs.climbs.map(function( count, i){
        sum += parseInt(count,10) * i;
        return <span> V{i} - {count} | </span>;
      });
      let date = climbs.day.substring(0, 2);
      let month = parseInt(climbs.day.substring(2, 4), 10);
      data[index] = {name: date+' '+months[month-1], sum:sum};
    });
    return data
  }

  saveGrades() {
    var self = this;
    let url = '/api/climbs/'+this.state.uid;
    if (this.state.today) {
      url += '/date/' + this.state.today;
    }
    $.ajax({
      url:url,
      contentType: 'application/json',
      type: "POST",
      data: JSON.stringify({grades : this.state.counts}),
      success:function (res) {
        let previous = self.state.previous;
        let today = self.state.today;
        if (!today) {
          today = new Date();
          today = [("0" + today.getDate()).slice(-2),  // Get day and pad it with zeroes
            ("0" + (today.getMonth() + 1)).slice(-2),      // Get month and pad it with zeroes
            today.getFullYear()].join('');
        }

        if (res.result == 'success') {
          let updated = false;
          for (let i = 0; i < self.state.previous.length;i++) {
            if(self.state.previous[i].day === today) {
              self.state.previous[i].climbs = self.state.counts;
              updated = true;
            }
          }

          if (!updated) {
            previous.push({'day':today, climbs: self.state.counts});
          }
        } else {
          self.showError("could not save grades");
        }

        let formattedPrevious = self.formatPreviousGraph(previous);
        self.setState({formattedPrevious, previous});
      }
    });
  }

  showError(msg) {
    this.setState({'error':msg});
  }

  updateDate(event) {
    this.setState({today:event.target.value});
  }

  updateCount(grade, amt) {
    let counts = this.state.counts;
    counts[grade] = Math.max(parseInt(counts[grade], 10) + amt, 0);
    this.setState({counts:counts});
  }

  render() {
    var self = this;

    let grades = this.state.counts.map(function(count, grade){
      return <Grade key={grade+"_grade"} num={ grade } count={count} onChange={self.updateCount}/>;
    });
    let sum = this.sumCounts(this.state.counts);

    return (
      // Add your component markup and other subcomponent references here.
      <div className="columns">
        <div className="column">
          <h1 className="title is-1">Today</h1>
          <div><p>Total: {sum}</p></div>
          {grades}
          <a className="button" onClick={this.saveGrades}>Save</a>
          <div>
            <label htmlFor="date">Date</label>
            <input id="date" value={this.state.today} onChange={this.updateDate}/>
          </div>
          <progress className="progress" value="15" max="100">15%</progress>

          <h1 className="title is-1">Previous Days</h1>
          <LineChart width={300} height={100} data={this.state.formattedPrevious}>
            <Line type='monotone' dataKey='sum' stroke='#8884d8' strokeWidth={2} />
            <XAxis dataKey="name" />
            <YAxis dataKey="sum" />
          </LineChart>

          <table className="table">
            <thead>
              <tr>
                <th><abbr title="Position">Pos</abbr></th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}
