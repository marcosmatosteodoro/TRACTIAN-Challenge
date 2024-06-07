import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { RowContainer } from '../../../components';

describe('RowContainer component', () => {
  it('should render the RowContainer component with company name and buttons', () => {
    const company = {
      id: 'cscsciub461',
      name: 'Example Company',
    };

    render(
      <ChakraProvider>
        <RowContainer company={company} />
      </ChakraProvider>,
    );

    const companyNameElement = screen.getByText(/Example Company Unit/i);
    expect(companyNameElement).toBeInTheDocument();

    const energyButton = screen.getByRole('button', {
      name: /Sensor de Energia/i,
    });
    const infoButton = screen.getByRole('button', { name: /Critico/i });
    expect(energyButton).toBeInTheDocument();
    expect(infoButton).toBeInTheDocument();
  });
});
