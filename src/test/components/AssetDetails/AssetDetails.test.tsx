import { render, screen } from '@testing-library/react';
import { AssetDetails } from '../../../components';
import { Assets } from '../../../domain/models';

describe('AssetDetails', () => {
  const mockAsset: Assets = {
    id: '1',
    name: 'Test Asset',
    status: 'operating',
    locationId: '1',
    parentId: '1',
    sensorType: 'energy',
  };

  it.skip('renders component correctly', () => {
    render(<AssetDetails currentAsset={mockAsset} />);
    const component = screen.getByTestId('asset-details');
    expect(component).toBeInTheDocument();
  });

  it('renders the asset name correctly', () => {
    render(<AssetDetails currentAsset={mockAsset} />);
    const assetName = screen.getByText('Test Asset');
    expect(assetName).toBeInTheDocument();
  });

  it('renders the operating status icon correctly', () => {
    render(<AssetDetails currentAsset={mockAsset} />);
    const boltIcon = screen.getByTestId('bolt-icon');
    expect(boltIcon).toBeInTheDocument();
  });
});
