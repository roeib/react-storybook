

import React from 'react';

import { Roei } from './Roei';

export default {
  title: 'Example/Roei',
  component: Roei,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Roei {...args} />;

export const Dvd = Template.bind({});
Dvd.args = {
  label: 'Button',
  cc: {name: 'button'},
  vv:false
};

