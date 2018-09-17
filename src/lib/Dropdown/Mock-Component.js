import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './Mock-Component.css';
const cx = cn.bind(style);

/**
 * <MockComponent />: A mock reuseable react component
 * @prop {boolean} isMock Takes a string for no reason
 * @prop {string} classNames A string of classnames
 */

class MockComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mock: true
    }
  }

  render() {
    return (
      <div className={cx(style.mockComponent)}></div>
    );
  }
}

Mock-Component.propTypes = {
  classNames: PropTypes.string,
  isMock: PropTypes.bool
};

Mock-Component.defaultProps = {
  classNames: '',
  isMock: true
};

export default Mock-Component;
