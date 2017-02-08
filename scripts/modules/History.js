import React, { Component } from 'react';
import { LineChart, ResponsiveContainer, Tooltip, Line, XAxis, YAxis } from 'recharts';

export default class History extends Component {

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

  render() {
    var self = this;

    let formatPrevious = this.formatPreviousGraph(this.props.previous);
    let maxColumns = 1;

    const rows = this.props.previous.map((climbs, k) => {
      const i = climbs.climbs.map( (climbCount, index) => {
        maxColumns = Math.max(maxColumns, index);
        return (<td key={index}>{climbCount}</td>);
      });
      i.unshift(<td key={climbs.day}>{self.constructor.getDateFromString(climbs.day)}</td>);
      return <tr key={k+"_tablerow"}>{i}</tr>;
    });


    const header = [];
    for (let i = 0; i <= maxColumns; i += 1) {
      header.push(<th key={i+"_tablegrades"}>V{i}</th>);
    }

    return (
      <div className={this.props.isActive ? 'is-active tab-pane': 'tab-pane'}>
        <h1 className="title is-1">History</h1>
        <div>
          <h1 className="title is-3">Daily Point Sum</h1>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={formatPrevious}>
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
    );
  }
}

History.propTypes = {
  isActive: React.PropTypes.bool.isRequired,
  previous: React.PropTypes.array.isRequired
};


