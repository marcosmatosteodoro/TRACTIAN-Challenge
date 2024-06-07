import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WifiTetheringIcon } from '../../../components'; // Certifique-se de fornecer o caminho correto para o componente

describe('WifiTetheringIcon component', () => {
  it('should render the SVG element', () => {
    render(
      <ChakraProvider>
        <WifiTetheringIcon data-testid="wifi-tethering-icon" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('wifi-tethering-icon');
    expect(svgElement).toBeInTheDocument();
  });

  it('should accept and apply custom size', () => {
    render(
      <ChakraProvider>
        <WifiTetheringIcon data-testid="wifi-tethering-icon" boxSize="20px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('wifi-tethering-icon');
    expect(svgElement).toHaveStyle('width: 20px; height: 20px');
  });

  it('should accept and apply custom width and height', () => {
    render(
      <ChakraProvider>
        <WifiTetheringIcon data-testid="wifi-tethering-icon" width="24px" height="22px" />
      </ChakraProvider>,
    );
    const svgElement = screen.getByTestId('wifi-tethering-icon');
    expect(svgElement).toHaveStyle('width: 24px; height: 22px');
  });
});
