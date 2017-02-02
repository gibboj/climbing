import React, { Component } from 'react';

export default class Grade extends Component {
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

