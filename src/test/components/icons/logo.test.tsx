import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LogoIcon } from '../../../components';

describe('LogoIcon component', () => {
  it('should render the SVG element', () => {
    render(
      <ChakraProvider>
        <LogoIcon data-testid="logo-icon" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('logo-icon');
    expect(svgElement).toBeInTheDocument();
  });

  it('should accept and apply custom size', () => {
    render(
      <ChakraProvider>
        <LogoIcon data-testid="logo-icon" boxSize="150px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('logo-icon');
    expect(svgElement).toHaveStyle('width: 150px; height: 150px');
  });

  it('should accept and apply custom width and height', () => {
    render(
      <ChakraProvider>
        <LogoIcon data-testid="logo-icon" width="80px" height="20px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('logo-icon');
    expect(svgElement).toHaveStyle('width: 80px; height: 20px');
  });
});
