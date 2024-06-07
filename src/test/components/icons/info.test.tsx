import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { InfoIcon } from '../../../components';

describe('InfoIcon component', () => {
  it('should render the SVG element', () => {
    render(
      <ChakraProvider>
        <InfoIcon data-testid="info-icon" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('info-icon');
    expect(svgElement).toBeInTheDocument();
  });

  it('should accept and apply custom size', () => {
    render(
      <ChakraProvider>
        <InfoIcon data-testid="info-icon" boxSize="20px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('info-icon');
    expect(svgElement).toHaveStyle('width: 20px; height: 20px');
  });

  it('should accept and apply custom width and height', () => {
    render(
      <ChakraProvider>
        <InfoIcon data-testid="info-icon" width="16px" height="16px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('info-icon');
    expect(svgElement).toHaveStyle('width: 16px; height: 16px');
  });
});
