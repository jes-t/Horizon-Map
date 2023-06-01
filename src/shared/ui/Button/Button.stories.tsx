import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { Button, ButtonTheme } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'theme' },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Click',
        theme: ButtonTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.Light)],
};
export const Clear: Story = {
    args: {
        title: 'Click',
        theme: ButtonTheme.CLEAR,
    },
};
export const Outline: Story = {
    args: {
        title: 'Click',
        theme: ButtonTheme.OUTLINE,
    },
};
export const OutlineDark: Story = {
    args: {
        title: 'Click',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.Dark)],
};
