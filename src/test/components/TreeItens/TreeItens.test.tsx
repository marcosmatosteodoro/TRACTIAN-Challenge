import { Assets, TreeNode } from '@/domain/models';
import { fireEvent, render, screen } from '@testing-library/react';
import { TreeItens } from '../../..//components';

describe('TreeItems', () => {
  const mockTreeNode: TreeNode[] = [
    {
      location: { id: '1', name: 'Location A', parentId: null },
      asset: null,
      childrens: [],
      startOpen: false,
      hidden: false,
    },
    {
      location: null,
      asset: {
        id: '1',
        name: 'Test Asset',
        status: 'operating',
        locationId: '1',
        parentId: '1',
        sensorType: 'energy',
      },
      childrens: [],
      startOpen: false,
      hidden: false,
    },
  ];

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
    treeNode: mockTreeNode,
    currentAsset: mockCurrentAsset,
    changeCurrentAsset: mockChangeCurrentAsset,
  };

  it.skip('renders component correctly', () => {
    render(<TreeItens {...mockProps} />);

    const treeItemText = screen.getByTestId('tree-item-text');
    expect(treeItemText).toBeInTheDocument();
  });

  it('renders "No items found" message when no items are present', () => {
    render(
      <TreeItens
        treeNode={[]}
        currentAsset={mockCurrentAsset}
        changeCurrentAsset={mockChangeCurrentAsset}
      />,
    );

    const noItemsFoundText = screen.getByText('No items found');
    expect(noItemsFoundText).toBeInTheDocument();
  });

  it.skip('executes changeCurrentAsset when a tree item is clicked', () => {
    render(<TreeItens {...mockProps} />);

    const treeItemButton = screen.getByRole('button');
    fireEvent.click(treeItemButton);

    expect(mockChangeCurrentAsset).toHaveBeenCalledWith('1');
  });
});
