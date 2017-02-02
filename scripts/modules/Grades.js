import React, { Component } from 'react';

export default class Grade extends Component {
  constructor(props) {
    super(props);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  decrementCount() {
    this.props.onChange(this.props.num, -1);
  }

  incrementCount() {
    this.props.onChange(this.props.num, 1);
  }

  render () {
    return (
      <div className="counter">
        <div className="count left">
          <span>V{this.props.num} &nbsp;</span>
        </div>
        <div className="count">
          <span className="subtitle is-2"> {this.props.count}</span>
        </div>
        <a className="button" onClick={this.incrementCount} id="addButton">+</a>
        <a className="button" onClick={this.decrementCount} id="minusButton">-</a>
      </div>
    )
  }
}

