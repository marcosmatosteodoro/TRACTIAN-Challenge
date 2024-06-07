import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { CardContainer } from '../../../components';

describe('CardContainer component', () => {
  it('should render the CardContainer component with default padding', () => {
    render(
      <ChakraProvider>
        <CardContainer>
          <div data-testid="child-element">Child element</div>
        </CardContainer>
      </ChakraProvider>,
    );

    const cardContainerElement = screen.getByTestId('card-container');
    const childElement = screen.getByTestId('child-element');

    expect(cardContainerElement).toBeInTheDocument();
    expect(childElement).toBeInTheDocument();
  });

  it('should render the CardContainer component with custom padding', () => {
    render(
      <ChakraProvider>
        <CardContainer padding="20px">
          <div data-testid="child-element">Child element</div>
        </CardContainer>
      </ChakraProvider>,
    );

    const cardContainerElement = screen.getByTestId('card-container');
    const childElement = screen.getByTestId('child-element');

    expect(cardContainerElement).toBeInTheDocument();
    expect(childElement).toBeInTheDocument();

    expect(cardContainerElement).toHaveStyle('padding: 20px');
  });
});
