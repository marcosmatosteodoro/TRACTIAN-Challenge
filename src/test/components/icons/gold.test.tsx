import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { GoldIcon } from '../../../components';

describe('GoldIcon component', () => {
  it('should render the SVG element', () => {
    render(
      <ChakraProvider>
        <GoldIcon data-testid="gold-icon" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('gold-icon');
    expect(svgElement).toBeInTheDocument();
  });

  it('should accept and apply custom size', () => {
    render(
      <ChakraProvider>
        <GoldIcon data-testid="gold-icon" boxSize="20px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('gold-icon');
    expect(svgElement).toHaveStyle('width: 20px; height: 20px');
  });

  it('should accept and apply custom width and height', () => {
    render(
      <ChakraProvider>
        <GoldIcon data-testid="gold-icon" width="16px" height="12px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('gold-icon');
    expect(svgElement).toHaveStyle('width: 16px; height: 12px');
  });
});
