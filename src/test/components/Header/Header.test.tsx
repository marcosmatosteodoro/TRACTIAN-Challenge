import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from '../../../components';

describe('Header component', () => {
  const mockCompanies = [
    { id: '1', name: 'Company 1', current: true },
    { id: '2', name: 'Company 2', current: false },
  ];

  it('should render the header container with logo and company buttons', () => {
    render(
      <Header companies={mockCompanies} changeCurrentCompany={() => {}} />,
    );

    const headerContainer = screen.getByTestId('header-container');
    const logoIcon = screen.getByTestId('logo-icon');
    const companyButtons = screen.getAllByTestId('company-button');

    expect(headerContainer).toBeInTheDocument();
    expect(logoIcon).toBeInTheDocument();
    expect(companyButtons).toHaveLength(mockCompanies.length);
  });

  it('should call changeCurrentCompany function when a company button is clicked', () => {
    const mockChangeCurrentCompany = jest.fn();
    render(
      <Header
        companies={mockCompanies}
        changeCurrentCompany={mockChangeCurrentCompany}
      />,
    );

    const companyButtons = screen.getAllByTestId('company-button');
    companyButtons.forEach((button) => {
      fireEvent.click(button);
    });

    expect(mockChangeCurrentCompany).toHaveBeenCalledTimes(
      mockCompanies.length,
    );
  });

  it('should render loading component if companies prop is empty', () => {
    render(<Header companies={[]} changeCurrentCompany={() => {}} />);

    const loadingComponent = screen.getByTestId('loading');

    expect(loadingComponent).toBeInTheDocument();
  });
});
