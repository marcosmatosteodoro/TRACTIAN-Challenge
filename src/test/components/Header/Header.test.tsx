import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { Header } from '../../../components';
import { CompanyState } from '../../../domain';

describe('Header component', () => {
  const companies: CompanyState[] = [
    { id: '1', name: 'Company One', current: true },
    { id: '2', name: 'Company Two', current: false },
  ];

  it('should render the Header component', () => {
    render(
      <ChakraProvider>
        <Header companies={companies} />
      </ChakraProvider>,
    );

    expect(screen.getByTestId('header-container')).toBeInTheDocument();
  });

  it('should render the logo icon', () => {
    render(
      <ChakraProvider>
        <Header companies={companies} />
      </ChakraProvider>,
    );

    expect(screen.getByTestId('logo-icon')).toBeInTheDocument();
  });

  it('should render the company buttons', () => {
    render(
      <ChakraProvider>
        <Header companies={companies} />
      </ChakraProvider>,
    );

    companies.forEach((company) => {
      expect(screen.getByText(company.name)).toBeInTheDocument();
    });
  });
});
