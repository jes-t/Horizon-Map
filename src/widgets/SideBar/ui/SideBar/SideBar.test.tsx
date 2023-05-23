import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { fireEvent } from '@testing-library/react';
import { SideBar } from './SideBar';

describe('Button Test', () => {
    test('render Button', () => {
        const { getByTestId } = renderWithTranslation(<SideBar />);
        expect(getByTestId('sidebar')).toBeInTheDocument();
    });
    test('toggle sidebar', () => {
        const { getByTestId, getByText } = renderWithTranslation(<SideBar />);
        expect(getByTestId('sidebar')).toBeInTheDocument();

        const toggleBtn = getByText('toggle');

        fireEvent.click(toggleBtn);
        expect(getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
