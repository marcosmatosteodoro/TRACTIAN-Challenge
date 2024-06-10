import { fireEvent, render, screen } from '@testing-library/react';
import { SecondaryButton } from '../../../components';

describe('SecondaryButton', () => {
  const clickMock = jest.fn();

  beforeEach(() => {
    clickMock.mockClear();
  });

  it('renders with the correct text', () => {
    render(
      <SecondaryButton icon="thunderbolt" active={false} onClick={clickMock}>
        Click me
      </SecondaryButton>,
    );

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it.skip('applies active styles when active prop is true', () => {
    render(
      <SecondaryButton icon="infoIcon" active={true} onClick={clickMock}>
        Active Button
      </SecondaryButton>,
    );

    const button = screen.getByTestId('secondary-button');
    expect(button).toHaveStyle('background-color: #2188FF');
    expect(button).toHaveStyle('color: #FFFFFF');
  });

  it.skip('applies default styles when active prop is false', () => {
    render(
      <SecondaryButton icon="infoIcon" active={false} onClick={clickMock}>
        Inactive Button
      </SecondaryButton>,
    );

    const button = screen.getByTestId('secondary-button');
    expect(button).toHaveStyle('background-color: #FFFFFF');
    expect(button).toHaveStyle('color: #77818C');
  });

  it('calls the onClick function when clicked', () => {
    render(
      <SecondaryButton icon="thunderbolt" active={false} onClick={clickMock}>
        Clickable Button
      </SecondaryButton>,
    );

    const button = screen.getByTestId('secondary-button');
    fireEvent.click(button);
    expect(clickMock).toHaveBeenCalled();
  });

  it('applies hover styles correctly', () => {
    render(
      <SecondaryButton icon="infoIcon" active={false} onClick={clickMock}>
        Hoverable Button
      </SecondaryButton>,
    );

    const button = screen.getByTestId('secondary-button');
    fireEvent.mouseOver(button);
    expect(button).toHaveStyle('background-color: #77818C');
    expect(button).toHaveStyle('color: #FFFFFF');
  });

  it('renders the correct icon based on the icon prop', () => {
    const { rerender } = render(
      <SecondaryButton icon="thunderbolt" active={false} onClick={clickMock}>
        Thunderbolt Icon Button
      </SecondaryButton>,
    );

    expect(
      screen.getByTestId('secondary-button').querySelector('svg'),
    ).toBeInTheDocument();

    rerender(
      <SecondaryButton icon="infoIcon" active={false} onClick={clickMock}>
        Info Icon Button
      </SecondaryButton>,
    );

    expect(
      screen.getByTestId('secondary-button').querySelector('svg'),
    ).toBeInTheDocument();
  });

  it('renders the text correctly on medium screens and larger', () => {
    render(
      <SecondaryButton icon="infoIcon" active={false} onClick={clickMock}>
        Click me
      </SecondaryButton>,
    );

    expect(screen.getByText('Click me')).toHaveStyle('display: block');
  });

  it.skip('does not render the text on small screens', () => {
    render(
      <SecondaryButton icon="infoIcon" active={false} onClick={clickMock}>
        Click me
      </SecondaryButton>,
    );

    expect(screen.getByText('Click me')).toHaveStyle('display: none');
  });
});
