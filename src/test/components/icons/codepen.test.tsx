import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CodepenIcon } from '../../../components';

describe('CodepenIcon component', () => {
  it('should render the SVG element', () => {
    render(
      <ChakraProvider>
        <CodepenIcon data-testid="codepen-icon" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('codepen-icon');
    expect(svgElement).toBeInTheDocument();
  });

  it('should accept and apply custom size', () => {
    render(
      <ChakraProvider>
        <CodepenIcon data-testid="codepen-icon" boxSize="30px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('codepen-icon');
    expect(svgElement).toHaveStyle('width: 30px; height: 30px');
  });

  it('should accept and apply custom width and height', () => {
    render(
      <ChakraProvider>
        <CodepenIcon data-testid="codepen-icon" width="25px" height="25px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('codepen-icon');
    expect(svgElement).toHaveStyle('width: 25px; height: 25px');
  });
});
