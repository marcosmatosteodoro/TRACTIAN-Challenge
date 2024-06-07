import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CubeOutlineIcon } from '../../../components';

describe('CubeOutlineIcon component', () => {
  it('should render the SVG element', () => {
    render(
      <ChakraProvider>
        <CubeOutlineIcon data-testid="cube-outline-icon" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('cube-outline-icon');
    expect(svgElement).toBeInTheDocument();
  });

  it('should accept and apply custom size', () => {
    render(
      <ChakraProvider>
        <CubeOutlineIcon data-testid="cube-outline-icon" boxSize="30px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('cube-outline-icon');
    expect(svgElement).toHaveStyle('width: 30px; height: 30px');
  });

  it('should accept and apply custom width and height', () => {
    render(
      <ChakraProvider>
        <CubeOutlineIcon
          data-testid="cube-outline-icon"
          width="25px"
          height="25px"
        />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('cube-outline-icon');
    expect(svgElement).toHaveStyle('width: 25px; height: 25px');
  });
});
