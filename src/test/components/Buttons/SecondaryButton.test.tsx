import { fireEvent, render, screen } from '@testing-library/react';
import { SecondaryButton } from '../../../components';


describe('SecondaryButton', () => {
  test('renders with thunderbolt icon', () => {
    const handleClick = jest.fn();
    render(
      <SecondaryButton icon="thunderbolt" onClick={handleClick}>
        Thunderbolt
      </SecondaryButton>
    );
    expect(screen.getByTestId('thunderbolt-icon')).toBeInTheDocument();
  });

  test('renders with info icon', () => {
    const handleClick = jest.fn();
    render(
      <SecondaryButton icon="infoIcon" onClick={handleClick}>
        Info
      </SecondaryButton>
    );
    expect(screen.getByTestId('info-icon')).toBeInTheDocument();
  });

  test.skip('calls onClick and toggles active state', () => {
    const handleClick = jest.fn();
    render(
      <SecondaryButton icon="infoIcon" onClick={handleClick}>
        Click me
      </SecondaryButton>
    );
    const button = screen.getByTestId('secondary-button');

    expect(button).toHaveStyle('background-color: #FFFFFF');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);

    expect(button).toHaveStyle('background-color: #2188FF');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(2);

    expect(button).toHaveStyle('background-color: #FFFFFF');
  });
});
