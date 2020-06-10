import React, { Component } from 'react';
import PropTypes from 'prop-types';

import pieInner from '.././math/pieInner';
import move from '.././math/move';

export default class Inner extends Component {

  static propTypes = {
    d: PropTypes.shape({
      color: PropTypes.string,
    }).isRequired,
    rx: PropTypes.number.isRequired,
    ry: PropTypes.number.isRequired,
    ir: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired,
    move: PropTypes.func
  }

  move = () => this.props.move(this.props.d)

  render() {
    return (
      <path style={{ fill: this.props.d.color, cursor: 'pointer' }}
            d={pieInner(this.props.d, this.props.rx, this.props.ry, this.props.h, this.props.ir)}
            onClick={this.move}
            stroke="white"
            transform={this.props.moved ?
              `translate(${move(this.props.d, this.props.rx, this.props.ry)})`
              :
              'translate(0,0)'}
      />
    );
  }
}
