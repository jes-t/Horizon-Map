import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button Test', () => {
    test('render Button', () => {
        const { getByText } = render(<Button title="test" />);
        expect(getByText('test')).toBeInTheDocument();
    });
});
