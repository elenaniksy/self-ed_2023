import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Modal } from 'shared/ui/Modal/Modal';
import {
    ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi architecto assumenda autem beatae ducimus, error est eveniet harum impedit iure libero magni maiores necessitatibus nisi perspiciatis praesentium quisquam recusandae sed sequi ullam velit veritatis voluptatem. Aliquid consectetur magnam maxime, pariatur quaerat tenetur? Assumenda consectetur enim, explicabo facere ipsum repellat!',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi architecto assumenda autem beatae ducimus, error est eveniet harum impedit iure libero magni maiores necessitatibus nisi perspiciatis praesentium quisquam recusandae sed sequi ullam velit veritatis voluptatem. Aliquid consectetur magnam maxime, pariatur quaerat tenetur? Assumenda consectetur enim, explicabo facere ipsum repellat!',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
