import { fireEvent, render, screen } from '@testing-library/react';
import { TreeNodeContent } from '../../../components';
import { Asset, TreeNode } from '../../../domain/models';

describe('TreeNodeContent', () => {
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

  const mockCurrentAsset: Asset = {
    id: '1',
    name: 'Test Asset',
    status: 'operating',
    locationId: '1',
    parentId: '1',
    sensorType: 'energy',
  };

  const mockChangeCurrentAsset = jest.fn();
  const mockFilterBySearch = jest.fn();

  const mockProps = {
    treeNode: mockTreeNode,
    currentAsset: mockCurrentAsset,
    changeCurrentAsset: mockChangeCurrentAsset,
    filterBySearch: mockFilterBySearch,
  };

  it.skip('renders component correctly', () => {
    render(<TreeNodeContent {...mockProps} />);

    const searchInput = screen.getByTestId('search-input');
    const treeItemText = screen.getByTestId('tree-item-text');

    expect(searchInput).toBeInTheDocument();
    expect(treeItemText).toBeInTheDocument();
  });

  it.skip('executes filterBySearch when search input changes', () => {
    render(<TreeNodeContent {...mockProps} />);

    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'Test' } });

    expect(mockFilterBySearch).toHaveBeenCalledWith('Test');
  });

  it.skip('executes changeCurrentAsset when a tree item is clicked', () => {
    render(<TreeNodeContent {...mockProps} />);

    const treeItemButton = screen.getByRole('button');
    fireEvent.click(treeItemButton);

    expect(mockChangeCurrentAsset).toHaveBeenCalledWith('1');
  });
});
