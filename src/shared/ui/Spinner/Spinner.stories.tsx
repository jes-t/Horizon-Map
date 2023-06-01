import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import Spinner from './Spinner';

const meta = {
    title: 'shared/Spinner',
    component: Spinner,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'theme' },
    },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.Light)],
};
export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.Dark)],
};
