import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import {
    ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SideBar } from 'widgets/SideBar';

export default {
    title: 'widgets/Sidebar',
    component: SideBar,
} as Meta<typeof SideBar>;

const Template: StoryFn<typeof SideBar> = (args) => <SideBar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
