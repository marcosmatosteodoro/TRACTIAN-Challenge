import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SearchIcon } from '../../../components';

describe('SearchIcon component', () => {
  it('should render the SVG element', () => {
    render(
      <ChakraProvider>
        <SearchIcon data-testid="search-icon" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('search-icon');
    expect(svgElement).toBeInTheDocument();
  });

  it('should accept and apply custom size', () => {
    render(
      <ChakraProvider>
        <SearchIcon data-testid="search-icon" boxSize="20px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('search-icon');
    expect(svgElement).toHaveStyle('width: 20px; height: 20px');
  });

  it('should accept and apply custom width and height', () => {
    render(
      <ChakraProvider>
        <SearchIcon data-testid="search-icon" width="18px" height="18px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('search-icon');
    expect(svgElement).toHaveStyle('width: 18px; height: 18px');
  });
});
