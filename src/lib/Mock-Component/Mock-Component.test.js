import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MockComponent from './MockComponent';

describe('<Dropdown />', function () {
  const wrapper = shallow(<MockComponent />);

  it('Component renders', function () {
    expect(wrapper.find('#myuitkit-mock-component').exists()).to.be.true;
  });
});
