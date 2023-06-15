import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { PageError } from './PageError';

const meta = {
    title: 'widget/PageError',
    component: PageError,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'theme' },
    },
} satisfies Meta<typeof PageError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.Dark)],
};
