import { render, screen } from '@testing-library/react';
import { AssetDetaillsContent } from '../../../../../components/AssetDetails/components';

describe('AssetDetaillsContent', () => {
  it.skip('renders component correctly', () => {
    render(<AssetDetaillsContent />);
    const component = screen.getByTestId('asset-details-content');
    expect(component).toBeInTheDocument();
  });

  it.skip('renders the asset image', () => {
    render(<AssetDetaillsContent />);
    const assetImage = screen.getByAltText('Asset Image');
    expect(assetImage).toBeInTheDocument();
  });

  it('renders the equipment type correctly', () => {
    render(<AssetDetaillsContent />);
    const equipmentType = screen.getByText('Tipo de Equipamenteo');
    expect(equipmentType).toBeInTheDocument();
    expect(equipmentType?.nextSibling?.textContent).toBe(
      'Motor Elétrico (Trifásico)',
    );
  });

  it.skip('renders the responsible correctly', () => {
    render(<AssetDetaillsContent />);
    const responsible = screen.getByText('Responsáveis');
    expect(responsible).toBeInTheDocument();
    expect(responsible?.nextSibling?.textContent).toBe('Elétrica');
  });

  it('renders the sensor information correctly', () => {
    render(<AssetDetaillsContent />);
    const sensor = screen.getByText('Sensor');
    expect(sensor).toBeInTheDocument();
    expect(sensor?.nextSibling?.textContent).toBe('HIO4510');
  });

  it('renders the receiver information correctly', () => {
    render(<AssetDetaillsContent />);
    const receiver = screen.getByText('Receptor');
    expect(receiver).toBeInTheDocument();
    expect(receiver?.nextSibling?.textContent).toBe('EUH4R27');
  });
});
