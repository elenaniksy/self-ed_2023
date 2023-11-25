import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import {
    ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NavBar } from 'widgets/NavBar';

export default {
    title: 'widgets/NavBar',
    component: NavBar,
} as Meta<typeof NavBar>;

const Template: StoryFn<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
