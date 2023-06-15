import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        className: { control: 'theme' },
    },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'ldldldlldldldldfbfbbfbfbfbfbfbbf bdbdbhdhdhhd bsbs msmdnnd bdbdbbdbdbdbbdbdbbdbdbdbdbddhdhhdhdhdhdhd ddddddd',
        isOpen: true,
    },
};

export const Dark: Story = {
    args: {
        children: 'ldldldlldldldldfbfbbfbfbfbfbfbbf bdbdbhdhdhhd bsbs msmdnnd bdbdbbdbdbdbbdbdbbdbdbdbdbddhdhhdhdhdhdhd ddddddd',
        isOpen: true,
    },
    decorators: [ThemeDecorator(Theme.Dark)],
};
