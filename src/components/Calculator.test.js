import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('renders Calculator component', () => {
    render(<Calculator />);
    const buttonArr = screen.getAllByRole('button');
    expect(buttonArr.length).toBe(19);
  });
});
