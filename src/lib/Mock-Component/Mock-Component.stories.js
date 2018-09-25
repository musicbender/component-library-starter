import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MockComponent from './Mock-Component';

const actionMessage = 'Mock clicked!';

storiesOf('MockComponent', module)
  .add('default', () => (
    <MockComponent
      classNames="mock-component"
      isMock={true}
      handleClick={action(actionMessage)}
    />
  ))
  .add('not mock?', () => (
    <MockComponent
      classNames="mock-component not"
      isMock={false}
      handleClick={action(actionMessage)}
    />
  ))
