import React, { Component } from 'react';
import $ from 'webpack-zepto';
import Grade from './modules/Grades.js';
import { LineChart,ResponsiveContainer,Tooltip, Line, XAxis, YAxis} from 'recharts';
require("./../static/scss/base.scss");

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={this.props.isactive ? 'is-active':''}>
        <a onClick={this.props.onClick}>
          <span>{this.props.name}</span>
        </a>
      </li>
    )
  }
}

class TodayOptions extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="moreOptionsContent">
        <h1 className="title is-h1">Save Options</h1>
        <label className="label" htmlFor="date">Date</label>
        <input className="input" id="date" value={this.props.today} onChange={this.props.onChangeDate}/>
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
      goal:50,
      topGrade:6,
      uid:1,
      today: '',
      previous:[],
      formattedPrevious:[],
      showOptions: false,
      activeTab: 'today'
    };
    //this.handleTabClick= this.handleTabClick.bind(this);
    this.handleMoreOptionsClick = this.handleMoreOptionsClick.bind(this);
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
          for (let i = 0; i < self.state.topGrade; i++) {
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

  getDateFromString (day) {
    var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];
    let date = day.substring(0, 2);
    let month = parseInt(day.substring(2, 4), 10);
    return date+' '+months[month-1];
  }

  formatPreviousGraph (previous) {
    let data = [];
    var self = this;
    previous.map(function(climbs, index) {
      let sum = 0;
      climbs.climbs.map(function( count, i){
        sum += parseInt(count,10) * i;
      });
      let date = self.getDateFromString(climbs.day);
      data[index] = {name: date, points:sum};
    });
    return data;
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
          for (let i = 0; i < previous.length;i++) {
            if (previous[i].day === today) {
              previous[i].climbs = self.state.counts;
              updated = true;
            }
          }

          if (!updated) {
            previous.push({'day':today, climbs: self.state.counts});
          }
        } else {
          self.showError("could not save grades!");
        }

        let formattedPrevious = self.formatPreviousGraph(previous);
        self.setState({formattedPrevious: formattedPrevious, previous:previous});
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

  handleTabClick(name, event) {
    this.setState({activeTab:name});
  }

  handleMoreOptionsClick(e) {
    this.setState({showOptions: !this.state.showOptions});
  }

  render() {
    var self = this;

    let grades = this.state.counts.map(function(count, grade){
      return <Grade key={grade+"_grade"} num={grade} count={count} onChange={self.updateCount}/>;
    });
    let sum = this.sumCounts(this.state.counts);
    let maxColumns = 1;
    let rows = this.state.previous.map(function(climbs, index) {
      let i = [(<td>{self.getDateFromString(climbs.day)}</td>)];
      for (let c in climbs.climbs) {
        i.push(<td>{climbs.climbs[c]}</td>);
        maxColumns = Math.max(maxColumns, c);
      }
      return <tr>{i}</tr>
    });

    let header = [];
    for (let i=0; i <= maxColumns; i++) {
      header.push(<th>V{i}</th>);
    }

    let tabs = this.props.tabs.map(function(tabName){
      return <Tab key={tabName+"_tab"} onClick={self.handleTabClick.bind(self, tabName)} name={tabName} isactive={self.state.activeTab === tabName ? true: false}></Tab>
    });

    return (
      // Add your component markup and other subcomponent references here.
      <div className="main-container">
        <div className="tabs is-boxed is-centered">
          <ul>
            {tabs}
          </ul>
        </div>

        <div className={this.state.activeTab === 'today' ? 'is-active tab-pane': 'tab-pane '}>
          <div className="level">
            <div className="level-left"><h1 className="title is-1 ">Today</h1></div>
            <div className="level-right"><a className="button is-primary level-right" onClick={this.saveGrades}>Save</a></div>
          </div>
          <div><p className="subtitle is-3">Points: {sum} / {this.state.goal}</p></div>
          <progress className="progress" value={sum} max={this.state.goal}>{sum}%</progress>
          {grades}
          <div>
            <br/>
            <a className="button moreOptions is-small" onClick={this.handleMoreOptionsClick}>More Options</a>
            { this.state.showOptions ? <TodayOptions /> : null }
          </div>
        </div>

        <div className={this.state.activeTab === 'history' ? 'is-active tab-pane': 'tab-pane'}>
          <h1 className="title is-1">History</h1>
          <div>
            <h1 className="title is-3">Daily Point Sum</h1>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={this.state.formattedPrevious}>
              <Line type='monotone' dataKey='points' stroke='#8884d8' strokeWidth={2} />
                <XAxis dataKey="name" />
                <YAxis dataKey="points" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div id="all-data">
            <h1 className="title is-3">All Data</h1>
            <table className="table">
              <thead>
                <tr>
                  <th><abbr title="date">Date</abbr></th>
                  {header}
                </tr>
              </thead>
              <tbody>
              {rows}
              </tbody>
            </table>
          </div>
        </div>

        <div className={this.state.activeTab === 'settings' ? 'is-active tab-pane': 'tab-pane '}>
          <h1 className="title is-1">Settings</h1>
          <div className="columns">
            <form className="column">
              <label className="label" htmlFor="goal">Goal</label>
              <input className="input" id="goal" value={this.state.goal} onChange={this.props.onChangeDate}/>
              <label className="label" htmlFor="topGrade">Top Grade</label>
              <p className="control">
                <span className="select is-medium">
                  <select>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                </span>
              </p>
            </form>
            <div className="column"></div>
          </div>
        </div>

      </div>

    );
  }
}
App.defaultProps = {
  tabs:['today', 'history', 'settings']
}
