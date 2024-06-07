import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CompanyButton } from '../../../components/Buttons/CompanyButton';

describe('CompanyButton component', () => {
  it('should render the button with children', () => {
    render(
      <ChakraProvider>
        <CompanyButton>Click Me</CompanyButton>
      </ChakraProvider>,
    );
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render the GoldIcon inside the button', () => {
    render(
      <ChakraProvider>
        <CompanyButton>Click Me</CompanyButton>
      </ChakraProvider>,
    );
    const iconElement = screen.getByTestId('gold-icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('should have the primary color background when active', () => {
    render(
      <ChakraProvider>
        <CompanyButton active>Click Me</CompanyButton>
      </ChakraProvider>,
    );
    const buttonElement = screen.getByTestId('company-button');
    expect(buttonElement).toHaveStyle('background-color: rgb(33, 136, 255)'); // #2188FF in RGB
  });

  it('should have the default background color when not active', () => {
    render(
      <ChakraProvider>
        <CompanyButton disableHover>Click Me</CompanyButton>
      </ChakraProvider>,
    );

    const buttonElement = screen.getByTestId('company-button');

    console.log(
      'buttonElement.style.backgroundColor:',
      buttonElement.style.backgroundColor,
    );

    const computedStyle = window.getComputedStyle(buttonElement);
    console.log(
      'computedStyle.backgroundColor:',
      computedStyle.backgroundColor,
    );

    expect(computedStyle.backgroundColor).toBe('rgb(2, 59, 120)'); // #023B78 in RGB
  });

  it('should apply opacity on hover', async () => {
    render(
      <ChakraProvider>
        <CompanyButton>Click Me</CompanyButton>
      </ChakraProvider>,
    );
    const buttonElement = screen.getByTestId('company-button');
    await userEvent.hover(buttonElement);
    expect(buttonElement).toHaveStyle('opacity: 0.9');
  });
});
