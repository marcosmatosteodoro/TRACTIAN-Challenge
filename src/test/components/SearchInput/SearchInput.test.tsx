import { fireEvent, render, screen } from '@testing-library/react';
import { SearchInput } from '../../../components';

describe('SearchInput', () => {
  it('renders component correctly', () => {
    const mockFilterBySearch = jest.fn();
    render(<SearchInput filterBySearch={mockFilterBySearch} />);

    const inputElement = screen.getByPlaceholderText('Buscar Ativo ou Local');
    const searchIcon = screen.getByTestId('search-icon');

    expect(inputElement).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });

  it('executes filterBySearch when input value changes', () => {
    const mockFilterBySearch = jest.fn();
    render(<SearchInput filterBySearch={mockFilterBySearch} />);

    const inputElement = screen.getByPlaceholderText('Buscar Ativo ou Local');
    fireEvent.change(inputElement, { target: { value: 'Test' } });

    expect(mockFilterBySearch).toHaveBeenCalledWith('Test');
  });
});
