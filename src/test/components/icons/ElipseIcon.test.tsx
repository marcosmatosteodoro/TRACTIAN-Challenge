import { render, screen } from '@testing-library/react';
import { ElipseIcon } from '../../../components';

describe('ElipseIcon component', () => {
  it('should render the ElipseIcon with default color', () => {
    render(<ElipseIcon />);
    const elipseIcon = screen.getByTestId('elipse-icon');
    expect(elipseIcon).toBeInTheDocument();
    expect(elipseIcon.querySelector('circle')).toHaveAttribute(
      'fill',
      '#52C41A',
    );
  });

  it('should render the ElipseIcon with a custom color', () => {
    render(<ElipseIcon color="red" />);
    const elipseIcon = screen.getByTestId('elipse-icon');
    expect(elipseIcon).toBeInTheDocument();
    expect(elipseIcon.querySelector('circle')).toHaveAttribute('fill', 'red');
  });
});
