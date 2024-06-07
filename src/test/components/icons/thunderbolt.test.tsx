import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThunderboltIcon } from '../../../components';

describe('ThunderboltIcon component', () => {
  it('should render the SVG element', () => {
    render(
      <ChakraProvider>
        <ThunderboltIcon data-testid="thunderbolt-icon" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('thunderbolt-icon');
    expect(svgElement).toBeInTheDocument();
  });

  it('should accept and apply custom size', () => {
    render(
      <ChakraProvider>
        <ThunderboltIcon data-testid="thunderbolt-icon" boxSize="20px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('thunderbolt-icon');
    expect(svgElement).toHaveStyle('width: 20px; height: 20px');
  });

  it('should accept and apply custom width and height', () => {
    render(
      <ChakraProvider>
        <ThunderboltIcon data-testid="thunderbolt-icon" width="18px" height="18px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('thunderbolt-icon');
    expect(svgElement).toHaveStyle('width: 18px; height: 18px');
  });
});
