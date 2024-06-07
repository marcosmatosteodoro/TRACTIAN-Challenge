import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { LogoIcon, SecondaryButton } from '../../../components';

describe('SecondaryButton component', () => {
  it('should render the SecondaryButton component with children and icon', () => {
    const onClickMock = jest.fn();

    render(
      <ChakraProvider>
        <SecondaryButton icon={<LogoIcon />} onClick={onClickMock}>
          Click me
        </SecondaryButton>
      </ChakraProvider>,
    );

    const buttonElement = screen.getByRole('button', { name: 'Click me' });
    const iconElement = screen.getByTestId('secondary-button');

    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();

    // Check if the button contains the text and the icon
    expect(buttonElement).toHaveTextContent('Click me');
    expect(iconElement).toBeInTheDocument();
  });
});
