// BoltIcon.test.tsx

import { render, screen } from '@testing-library/react';
import { BoltIcon } from '../../../components';

describe('BoltIcon component', () => {
  it('should render the BoltIcon with default color', () => {
    render(<BoltIcon />);
    const boltIcon = screen.getByTestId('bolt-icon');
    expect(boltIcon).toBeInTheDocument();
    expect(boltIcon.querySelector('path')).toHaveAttribute('fill', '#52C41A');
  });

  it('should render the BoltIcon with a custom color', () => {
    render(<BoltIcon color="red" />);
    const boltIcon = screen.getByTestId('bolt-icon');
    expect(boltIcon).toBeInTheDocument();
    expect(boltIcon.querySelector('path')).toHaveAttribute('fill', 'red');
  });
});
