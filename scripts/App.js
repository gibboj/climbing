import React, { Component } from 'react';
import $ from 'webpack-zepto';
import { LineChart, ResponsiveContainer, Tooltip, Line, XAxis, YAxis } from 'recharts';
import Grade from './modules/Grades';
import Tab from './modules/Tab';
import TodayOptions from './modules/TodayOptions';

require('./../static/scss/base.scss');


export default class App extends Component {
  static getDateFromString (day) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const date = day.substring(0, 2);
    const month = parseInt(day.substring(2, 4), 10);
    return date + ' ' + months[month - 1];
  }

  static sumCounts(counts) {
    let sum = 0;
    for (const grade in counts) {
      sum += grade * counts[grade];
    }
    return sum;
  }

  constructor(props) {
    super(props);

    this.state = {
      counts: [],
      sum: 0,
      goal: 50,
      topGrade: 6,
      uid: 1,
      today: '',
      previous: [],
      formattedPrevious: [],
      showOptions: false,
      activeTab: 'today'
    };

    this.handleMoreOptionsClick = this.handleMoreOptionsClick.bind(this);
    this.updateCount = this.updateCount.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateGoal = this.updateGoal.bind(this);
    this.updateTopGrade = this.updateTopGrade.bind(this);
    this.saveGrades = this.saveGrades.bind(this);
    this.saveSettings= this.saveSettings.bind(this);
  }


  componentDidMount() {
    const self = this;
    const url = `/api/climbs/${this.state.uid}`;
    $.ajax({
      url,
      contentType: 'application/json',
      type: 'GET',
      success: (res) => {
        const state = {};
        if (res[0] && res[0].length > 0) {
          state.counts = res[0].split(',');
          for (let i = state.counts.length; i < self.state.topGrade + 1; i += 1) {
            state.counts.push(0);
          }
        } else {
          state.counts = [];
          for (let i = 0; i < self.state.topGrade + 1; i += 1) {
            state.counts.push(0);
          }
        }

        if (res[1]) {
          state.previous = res[1];
        }
        state.formattedPrevious = self.formatPreviousGraph(state.previous);

        if (res[2]) {
          state.goal = res[2];
        }

        if (res[3]) {
          state.topGrade = res[3];
        }

        self.setState(state);
      }
    });
  }


  formatPreviousGraph(previous) {
    const self = this;

    return previous.map((climbs) => {
      let sum = 0;
      climbs.climbs.map((count, i) => {
        sum += parseInt(count, 10) * i;
      });

      return { name: self.constructor.getDateFromString(climbs.day), points: sum, goals: climbs.goals};
    });
  }

  saveGrades() {
    const self = this;
    let url = `/api/climbs/${this.state.uid}`;
    if (this.state.today) {
      url += `/date/${this.state.today}`;
    }
    $.ajax({
      url,
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify({ grades: this.state.counts }),
      success: (res) => {
        const previous = self.state.previous;
        let today = self.state.today;
        if (!today) {
          today = new Date();
          today = [('0' + today.getDate()).slice(-2),  // Get day and pad it with zeroes
            ('0' + (today.getMonth() + 1)).slice(-2),      // Get month and pad it with zeroes
            today.getFullYear()].join('');
        }

        if (res.result === 'success') {
          let updated = false;
          for (let i = 0; i < previous.length; i += 1) {
            if (previous[i].day === today) {
              previous[i].climbs = self.state.counts;
              updated = true;
            }
          }

          if (!updated) {
            previous.push({ day: today, climbs: self.state.counts });
          }
        } else {
          self.showError('could not save grades!');
        }
        self.setState({ formattedPrevious: self.formatPreviousGraph(previous), previous });
      }
    });
  }

  saveSettings() {
    let url = `/api/settings/${this.state.uid}`;

    $.ajax({
      url,
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify({ topGrade: this.state.topGrade, goal: this.state.goal }),
      success: (res) => {
        console.log(res.result);
      }
    });
  }

  showError(msg) {
    this.setState({ error: msg });
  }

  updateDate(event) {
    this.setState({ today: event.target.value });
  }

  updateCount(grade, amt) {
    const counts = this.state.counts;
    counts[grade] = Math.max(parseInt(counts[grade], 10) + amt, 0);
    this.setState({ counts: counts });
  }

  updateGoal(event) {
    this.setState({ goal: event.target.value });
  }

  updateTopGrade(event) {
    this.setState({ topGrade: event.target.value });
  }

  handleTabClick(name) {
    this.setState({ activeTab: name });
  }

  handleMoreOptionsClick() {
    this.setState({ showOptions: !this.state.showOptions });
  }

  render() {
    const self = this;
    const grades = this.state.counts.map((count, grade) => <Grade key={grade + '_grade'} num={grade} count={count} onChange={self.updateCount}/>);
    const sum = this.constructor.sumCounts(this.state.counts);

    let maxColumns = 1;

    const rows = this.state.previous.map((climbs) => {
      const i = climbs.climbs.map( (climbCount, index) => {
        maxColumns = Math.max(maxColumns, index);
        return (<td>{climbCount}</td>);
      });
      i.unshift(<td>{self.constructor.getDateFromString(climbs.day)}</td>);
      return <tr>{i}</tr>;
    });

    const header = [];
    for (let i = 0; i <= maxColumns; i += 1) {
      header.push(<th>V{i}</th>);
    }

    const tabs = this.props.tabs.map((tabName) => {
      return <Tab key={`${tabName}_tab`} onClick={self.handleTabClick.bind(self, tabName)} name={tabName} isactive={self.state.activeTab === tabName} />;
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
            <br />
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
                <Line type="natural" dataKey="points" stroke="#ff7300" strokeWidth={2} />
                <Line type="stepBefore" dataKey="goals" stroke="#8884d8" strokeWidth={2} />
                <XAxis dataKey="name" />
                <YAxis/>
                <Tooltip/>
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

        <div className={this.state.activeTab === 'settings' ? 'is-active tab-pane' : 'tab-pane '}>
          <div className="level">
            <div className="level-left"><h1 className="title is-1 ">Settings</h1></div>
            <div className="level-right"><a className="button is-primary level-right" onClick={this.saveSettings}>Save</a></div>
          </div>
          <div className="columns">
            <form className="column">
              <label className="label" htmlFor="goal">Points Goal</label>
              <input className="input" id="goal" value={this.state.goal} onChange={this.updateGoal} />
              <label className="label" htmlFor="topGrade">Top Grade</label>
              <p className="control">
                <span className="select is-medium">
                  <select onChange={this.updateTopGrade}>
                    {
                      this.props.topGrades.map(function (item, index) {
                        return <option value={item} selected={self.state.topGrade == item}>V{item}</option>;
                      })
                    }
                  </select>
                </span>
              </p>
            </form>
            <div className="column"/>
          </div>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  tabs: ['today', 'history', 'settings'],
  topGrades: [3,4,5,6,7,8,9,10,11,12]
};
