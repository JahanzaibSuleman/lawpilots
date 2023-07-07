import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button component', () => {
    render(<Button label='Button Label' />);
    const buttonLabel = screen.getByText(/Button Label/i);
    expect(buttonLabel).toBeInTheDocument();
});
