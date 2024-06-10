import { fireEvent, render, screen } from '@testing-library/react';
import { CompanyButton } from '../../../components';

describe('CompanyButton', () => {
  const clickMock = jest.fn();

  beforeEach(() => {
    clickMock.mockClear();
  });

  it('renders with the correct text', () => {
    render(<CompanyButton click={clickMock}>Click me</CompanyButton>);

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies active styles when active prop is true', () => {
    render(
      <CompanyButton active={true} click={clickMock}>
        Active Button
      </CompanyButton>,
    );

    const button = screen.getByTestId('company-button');
    expect(button).toHaveStyle('background-color: #2188FF');
  });

  it.skip('applies default styles when active prop is false', () => {
    render(
      <CompanyButton active={false} click={clickMock}>
        Inactive Button
      </CompanyButton>,
    );

    const button = screen.getByTestId('company-button');
    expect(button).toHaveStyle('background-color: #023B78');
  });

  it('calls the click function when clicked', () => {
    render(<CompanyButton click={clickMock}>Clickable Button</CompanyButton>);

    const button = screen.getByTestId('company-button');
    fireEvent.click(button);
    expect(clickMock).toHaveBeenCalled();
  });

  it('applies hover styles when disableHover prop is false', () => {
    render(
      <CompanyButton disableHover={false} click={clickMock}>
        Hoverable Button
      </CompanyButton>,
    );

    const button = screen.getByTestId('company-button');
    fireEvent.mouseOver(button);
    expect(button).toHaveStyle('opacity: 0.9');
  });

  it('does not apply hover styles when disableHover prop is true', () => {
    render(
      <CompanyButton disableHover={true} click={clickMock}>
        Non-hoverable Button
      </CompanyButton>,
    );

    const button = screen.getByTestId('company-button');
    fireEvent.mouseOver(button);
    expect(button).not.toHaveStyle('opacity: 0.9');
  });

  it('renders the "Unit" text correctly on medium screens and larger', () => {
    render(<CompanyButton click={clickMock}>Click me</CompanyButton>);

    expect(screen.getByText('Unit')).toHaveStyle('display: block');
  });

  it.skip('does not render the "Unit" text on small screens', () => {
    render(<CompanyButton click={clickMock}>Click me</CompanyButton>);

    expect(screen.getByText('Unit')).toHaveStyle('display: none');
  });
});
