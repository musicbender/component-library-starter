import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MockComponent from './Mock-Component';

const actionMessage = 'Option clicked';

storiesOf('MockComponent', module)
  .add('default', () => (
    <MockComponent
      options={options[0]}
      handleOption={action(actionMessage)}
    />
  ))
  .add('with disabled options', () => (
    <MockComponent
      options={options[1]}
      handleOption={action(actionMessage)}
    />
  ))
  .add('dark', () => (
    <MockComponent
      options={options[0]}
      handleOption={action(actionMessage)}
      type='darkBox'
    />
  ))
  .add('popout', () => (
    <MockComponent
      options={options[0]}
      handleOption={action(actionMessage)}
      type='popout'
    />
  ))
  .add('popout with nav', () => (
    <MockComponent
      options={options[2]}
      handleOption={action(actionMessage)}
      type='popout'
    />
  ))
