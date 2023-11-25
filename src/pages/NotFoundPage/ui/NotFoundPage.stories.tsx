import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import {
    ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import NotFoundPage from './NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
} as Meta<typeof NotFoundPage>;

const Template: StoryFn = (args) => <NotFoundPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
