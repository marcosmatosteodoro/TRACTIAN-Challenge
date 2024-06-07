import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LocationIcon } from '../../../components';

describe('LocationIcon component', () => {
  it('should render the SVG element', () => {
    render(
      <ChakraProvider>
        <LocationIcon data-testid="location-icon" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('location-icon');
    expect(svgElement).toBeInTheDocument();
  });

  it('should accept and apply custom size', () => {
    render(
      <ChakraProvider>
        <LocationIcon data-testid="location-icon" boxSize="24px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('location-icon');
    expect(svgElement).toHaveStyle('width: 24px; height: 24px');
  });

  it('should accept and apply custom width and height', () => {
    render(
      <ChakraProvider>
        <LocationIcon data-testid="location-icon" width="18px" height="18px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('location-icon');
    expect(svgElement).toHaveStyle('width: 18px; height: 18px');
  });
});
