import { render, screen } from '@testing-library/react';
import { SearchInput } from '../../../components';

describe('SearchInput component', () => {
  it('should render the SearchInput component with placeholder', () => {
    render(<SearchInput onChange={() => {}} />);

    const searchInputElement = screen.getByPlaceholderText(
      'Buscar Ativo ou Local',
    );
    expect(searchInputElement).toBeInTheDocument();
  });
});
