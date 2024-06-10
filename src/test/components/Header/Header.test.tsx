// Header.test.tsx
import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { Header } from '../../../components';

describe('Header', () => {
  const mockCompanies = [
    { id: '1', name: 'Company A', current: true },
    { id: '2', name: 'Company B', current: false },
  ];

  it('renders component correctly', () => {
    render(
      <ChakraProvider>
        <Header companies={[]} update={() => {}} />
      </ChakraProvider>
    );
    const component = screen.getByTestId('header-container');
    expect(component).toBeInTheDocument();
  });

  it('renders logo icon correctly', () => {
    render(
      <ChakraProvider>
        <Header companies={[]} update={() => {}} />
      </ChakraProvider>
    );
    const logoIcon = screen.getByTestId('logo-icon');
    expect(logoIcon).toBeInTheDocument();
  });

  it('renders company buttons correctly', () => {
    render(
      <ChakraProvider>
        <Header companies={mockCompanies} update={() => {}} />
      </ChakraProvider>
    );
    const companyButtons = screen.getAllByTestId('company-button');
    expect(companyButtons).toHaveLength(2);
  });

  it.skip('renders loading spinner when companies are loading', () => {
    render(
      <ChakraProvider>
        <Header companies={[]} update={() => {}} />
      </ChakraProvider>
    );
    const loadingSpinner = screen.getByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });
});
