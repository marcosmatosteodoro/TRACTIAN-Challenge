import { Company, TreeNodeFilters } from '@/domain/models';
import { render, screen } from '@testing-library/react';
import { RowContainer } from '../../../components';

describe('RowContainer', () => {
  const mockCompany: Company = { id: '1', name: 'Company A' };
  const mockFilter: TreeNodeFilters = {
    alert: false,
    thunderbolt: false,
    search: false,
  };

  it('renders component correctly', () => {
    render(
      <RowContainer
        company={mockCompany}
        filter={mockFilter}
        filterByAlert={() => {}}
        filterByThunderbolt={() => {}}
      />
    );

    const ativosText = screen.getByText('Ativos');
    const companyUnitText = screen.getByText('/ Company A Unit');
    const thunderboltButton = screen.getByText('Sensor de Energia');
    const alertButton = screen.getByText('Critico');

    expect(ativosText).toBeInTheDocument();
    expect(companyUnitText).toBeInTheDocument();
    expect(thunderboltButton).toBeInTheDocument();
    expect(alertButton).toBeInTheDocument();
  });

  it('executes filterByThunderbolt when thunderbolt button is clicked', () => {
    const mockFilterByThunderbolt = jest.fn();

    render(
      <RowContainer
        company={mockCompany}
        filter={mockFilter}
        filterByAlert={() => {}}
        filterByThunderbolt={mockFilterByThunderbolt}
      />
    );

    const thunderboltButton = screen.getByText('Sensor de Energia');
    thunderboltButton.click();

    expect(mockFilterByThunderbolt).toHaveBeenCalled();
  });

  it('executes filterByAlert when alert button is clicked', () => {
    const mockFilterByAlert = jest.fn();

    render(
      <RowContainer
        company={mockCompany}
        filter={mockFilter}
        filterByAlert={mockFilterByAlert}
        filterByThunderbolt={() => {}}
      />
    );

    const alertButton = screen.getByText('Critico');
    alertButton.click();

    expect(mockFilterByAlert).toHaveBeenCalled();
  });
});
