import { fireEvent, render, screen } from '@testing-library/react';
import { CompanyButton } from '../../../components';

describe('CompanyButton component', () => {
  it('should render the button with children and icon', () => {
    render(<CompanyButton click={() => {}}>Test</CompanyButton>);
    const buttonElement = screen.getByTestId('company-button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Test Unit');
    expect(buttonElement).toContainHTML('<svg'); // Ensure the icon is present
  });

  it('should call a function when clicked', () => {
    const onClickMock = jest.fn();
    render(<CompanyButton click={onClickMock}>Test</CompanyButton>);
    const buttonElement = screen.getByTestId('company-button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should change background color and hover style when active', () => {
    render(
      <CompanyButton active click={() => {}}>
        Test
      </CompanyButton>,
    );
    const buttonElement = screen.getByTestId('company-button');
    expect(buttonElement).toHaveStyle('background-color: #2188FF');
    fireEvent.mouseEnter(buttonElement);
    expect(buttonElement).toHaveStyle('opacity: 0.9');
  });

  it('should not change hover style when disableHover is true', () => {
    render(
      <CompanyButton active disableHover click={() => {}}>
        Test
      </CompanyButton>,
    );
    const buttonElement = screen.getByTestId('company-button');
    fireEvent.mouseEnter(buttonElement);
    expect(buttonElement).not.toHaveStyle('opacity: 0.9');
  });
});
