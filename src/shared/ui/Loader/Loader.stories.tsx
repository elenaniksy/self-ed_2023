import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import {
    ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from 'shared/ui/Loader/Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => <Loader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
