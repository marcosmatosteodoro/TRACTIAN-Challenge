import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { Loading } from '../../../components';

describe('Loading component', () => {
  it('should render the loading spinner with default color', () => {
    render(
      <ChakraProvider>
        <Loading />
      </ChakraProvider>,
    );
    const spinnerElement = screen.getByTestId('loading');
    expect(spinnerElement).toBeInTheDocument();
  });

  it('should render the loading spinner with custom color', () => {
    const customColor = 'red.500';
    render(
      <ChakraProvider>
        <Loading color={customColor} />
      </ChakraProvider>,
    );
    const spinnerElement = screen.getByTestId('loading').firstChild;
    expect(spinnerElement).toHaveStyle(`color: ${customColor}`);
  });

  it('should render the loading spinner with custom size', () => {
    const customSize = 'red.500';
    render(
      <ChakraProvider>
        <Loading size={customSize} />
      </ChakraProvider>,
    );
    const spinnerElement = screen.getByTestId('loading').firstChild;
    expect(spinnerElement).toHaveStyle(`width: ${customSize}`);
    expect(spinnerElement).toHaveStyle(`height: ${customSize}`);
  });
});
