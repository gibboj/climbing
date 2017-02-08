import React, { Component } from 'react';
import Grade from './Grades';

export default class Counter extends Component {

  static sumCounts(counts) {
    let sum = 0;
    for (const grade in counts) {
      sum += grade * counts[grade];
    }
    return sum;
  }

  render() {
    var self = this;
    const grades = this.props.counts.map((count, grade) => <Grade key={grade + '_grade'} num={grade} count={parseInt(count,10)} onChange={self.props.updateCount}/>);
    const sum = this.constructor.sumCounts(this.props.counts);

    return (
      <div className={this.props.isActive ? 'is-active tab-pane': 'tab-pane'}>
        <div className="level">
          <div className="level-left"><h1 className="title is-1 ">Today</h1></div>
          <div className="level-right"><a className="button is-primary level-right" onClick={this.props.saveGrades}>Save</a></div>
        </div>
        <div><p className="subtitle is-3">Points: {sum} / {this.props.goal}</p></div>
        <progress className="progress" value={sum} max={this.props.goal}>{sum}%</progress>
        {grades}
        <div>
          <br />
          <a className="button moreOptions is-small" onClick={this.handleMoreOptionsClick}>More Options</a>
          { this.props.showOptions ? <TodayOptions onDateChange={this.props.updateDate}/> : null }
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  isActive: React.PropTypes.bool.isRequired,
  counts: React.PropTypes.array.isRequired,
  goal: React.PropTypes.number.isRequired,
  showOptions: React.PropTypes.bool.isRequired
};

