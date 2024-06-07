import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MdOutlineRouterIcon } from '../../../components';

describe('MdOutlineRouterIcon component', () => {
  it('should render the SVG element', () => {
    render(
      <ChakraProvider>
        <MdOutlineRouterIcon data-testid="router-icon" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('router-icon');
    expect(svgElement).toBeInTheDocument();
  });

  it('should accept and apply custom size', () => {
    render(
      <ChakraProvider>
        <MdOutlineRouterIcon data-testid="router-icon" boxSize="20px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('router-icon');
    expect(svgElement).toHaveStyle('width: 20px; height: 20px');
  });

  it('should accept and apply custom width and height', () => {
    render(
      <ChakraProvider>
        <MdOutlineRouterIcon
          data-testid="router-icon"
          width="18px"
          height="18px"
        />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('router-icon');
    expect(svgElement).toHaveStyle('width: 18px; height: 18px');
  });
});
