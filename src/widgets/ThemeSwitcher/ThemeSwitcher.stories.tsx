import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import {
    ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';

export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
} as Meta<typeof ThemeSwitcher>;

const Template: StoryFn<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
