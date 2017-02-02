import React, { Component } from 'react';

export default class TodayOptions extends Component {
  render() {
    return (
      <div className="moreOptionsContent">
        <h1 className="title is-h1">Save Options</h1>
        <label className="label" htmlFor="date">Date</label>
        <input className="input" id="date" value={this.props.today} onChange={this.props.onChangeDate}/>
      </div>
    );
  }
}

TodayOptions.propTypes = {
  onChangeDate: React.PropTypes.func.isRequired,
  today: React.PropTypes.string
};
