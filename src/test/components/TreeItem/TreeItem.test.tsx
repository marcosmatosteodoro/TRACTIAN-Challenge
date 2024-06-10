import { Assets, TreeNode } from '@/domain/models';
import { fireEvent, render, screen } from '@testing-library/react';
import { TreeItem } from '../../../components';

describe('TreeItem', () => {
  const mockItem: TreeNode = {
    location: { id: '1', name: 'Location A', parentId: null },
    asset: {
      id: '1',
      name: 'Test Asset',
      status: 'operating',
      locationId: '1',
      parentId: '1',
      sensorType: 'energy',
    },
    childrens: [
      {
        location: null,
        asset: null,
        childrens: [],
        startOpen: false,
        hidden: false,
      },
    ],
    startOpen: false,
    hidden: false,
  };

  const mockCurrentAsset: Assets = {
    id: '1',
    name: 'Test Asset',
    status: 'operating',
    locationId: '1',
    parentId: '1',
    sensorType: 'energy',
  };

  const mockChangeCurrentAsset = jest.fn();

  const mockProps = {
    item: mockItem,
    currentAsset: mockCurrentAsset,
    changeCurrentAsset: mockChangeCurrentAsset,
  };

  it('renders component correctly', () => {
    render(<TreeItem {...mockProps} />);

    const treeItemText = screen.getByTestId('tree-item-text');
    expect(treeItemText).toBeInTheDocument();
  });

  it.skip('executes changeCurrentAsset when button is clicked', () => {
    render(<TreeItem {...mockProps} />);

    const treeItemButton = screen.getByRole('button');
    fireEvent.click(treeItemButton);

    expect(mockChangeCurrentAsset).toHaveBeenCalledWith('1');
  });

  it.skip('toggles children when button is clicked', () => {
    render(<TreeItem {...mockProps} />);

    const toggleButton = screen.getByTestId('toggle-children-button');
    fireEvent.click(toggleButton);

    const childrenContainer = screen.getByText('Location A');
    expect(childrenContainer).toBeInTheDocument();
  });
});
