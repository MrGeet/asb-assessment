import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from '../components/Form';

describe('Form', () => {
  it('should render form', () => {
    render(<Form />);
  });

  it('should have 3 input fields', () => {
    render(<Form />);
    const inputFields = screen.getAllByRole('textbox');
    expect(inputFields.length).toBe(3);
  });

  it('should format credit card number', () => {
    render(<Form />);
    const textBox = screen.getByRole('textbox', {
      name: /credit card number/i,
    });

    fireEvent.change(textBox, { target: { value: '1234123412341234' } });

    expect(textBox.getAttribute('value')).toBe('1234 1234 1234 1234');
  });

  it('should not allow non digit characters in credit card textbox', () => {
    render(<Form />);
    const textBox = screen.getByRole('textbox', {
      name: /credit card number/i,
    });

    fireEvent.change(textBox, { target: { value: '1234qwe@#!' } });

    expect(textBox.getAttribute('value')).toBe('1234');
  });

  it('should format expiry date', () => {
    render(<Form />);
    const textBox = screen.getByRole('textbox', {
      name: /expiry date/i,
    });

    fireEvent.change(textBox, { target: { value: '1223' } });

    expect(textBox.getAttribute('value')).toBe('12/23');
  });
});
