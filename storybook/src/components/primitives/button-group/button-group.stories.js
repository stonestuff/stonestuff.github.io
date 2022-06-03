import React from 'react';

import { ButtonGroup } from './button-group.component';

export default {
  title: 'Primitives/ButtonGroup',
  component: ButtonGroup
};

const Template = (args) => (
  <ButtonGroup {...args}/>
);

export const ButtonGroupExample = Template.bind({});

ButtonGroupExample.args = {
  array: [{title: 'one', onClick: console.log}, {title: 'two', onClick: console.log}]
};
