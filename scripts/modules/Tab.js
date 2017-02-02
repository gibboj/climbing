import React, { Component } from 'react';

export default class Tab extends Component {
  render() {
    return (
      <li className={this.props.isactive ? 'is-active' : ''}>
        <a onClick={this.props.onClick}>
          <span>{this.props.name}</span>
        </a>
      </li>
    );
  }
}

Tab.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
  isactive: React.PropTypes.bool.isRequired
};
