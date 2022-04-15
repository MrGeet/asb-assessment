import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../components/Navbar';

describe('Navbar', () => {
  it('should render Navbar', () => {
    render(<Navbar />);
  });

  it('should display card form text', () => {
    render(<Navbar />);
    screen.getByText(/register card form/i);
  });

  it('should open menu', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByTestId('MenuIcon'));
    screen.getByText(/menu/i);
    screen.getByText(/about/i);
    screen.getByText(/contact us/i);
    screen.getByText(/learn more/i);
    screen.getByText(/log in/i);
    expect(screen.queryByText(/register card form/i)).not.toBeInTheDocument();
  });

  it('should open menu then close it', () => {
    render(<Navbar />);

    fireEvent.click(screen.getByTestId('MenuIcon'));
    screen.getByText(/menu/i);
    expect(screen.queryByText(/register card form/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId('ArrowBackIcon'));
    screen.getByText(/register card form/i);
    expect(screen.queryByText(/menu/i)).not.toBeInTheDocument();
  });
});
