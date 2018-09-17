import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';

// mocks
import options from '../../../test/mocks/dropdown';

describe('<Dropdown />', function () {
  const wrapper = shallow(<Dropdown />);

  it('Component renders', function () {
    expect(wrapper.find('#ncw-ui-kit-dropdown').exists()).to.be.true;
  });

  describe('checkHasNav()', function () {
    const wrapper = shallow(<Dropdown />);
    const inst = wrapper.instance();
    const tests = [
      {
        assert: options[0],
        expected: false,
        description: 'An array of options'
      },
      {
        assert: options[1],
        expected: false,
        description: 'An array of options'
      },
      {
        assert: options[2],
        expected: true,
        description: 'An object of options'
      },
      {
        assert: [],
        expected: false,
        description: 'An empty array'
      },
      {
        assert: {},
        expected: true,
        description: 'An empty object'
      },
      {
        assert: 'nope',
        expected: false,
        description: 'A string'
      },
      {
        assert: 7,
        expected: false,
        description: 'A number'
      },
      {
        assert: null,
        expected: false,
        description: 'Null value'
      }
    ];

    tests.forEach(test => {
      const { assert, expected, description } = test;
      it(`Expect ${description} to be ${expected}`, function () {
        expect(inst.checkHasNav(assert)).to.equal(expected);
      });
    });
  });
});
