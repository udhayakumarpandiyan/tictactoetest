import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pieLabelPath from '.././math/pieLabelPath';
import move from '.././math/move';

export default class LabelPath extends Component {

  static propTypes = {
    d: PropTypes.shape({
    }).isRequired,
    rx: PropTypes.number.isRequired,
    ry: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired
  }

  render() {
    return (
      <path d={pieLabelPath(this.props.d, this.props.rx, this.props.ry, this.props.h)}
            stroke="black"
            transform={this.props.moved ?
              `translate(${move(this.props.d, this.props.rx, this.props.ry)})`
              :
              'translate(0,0)'}
      />
    );
  }
}
