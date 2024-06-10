import { fireEvent, render, screen } from '@testing-library/react';
import { TreeItem } from '../../../components';
import { TreeNode } from '../../../domain/models';

const mockTreeNode: TreeNode = {
  location: { id: '1', name: 'Location 1', parentId: null },
  asset: {
    id: '2',
    name: 'Asset 1',
    status: 'operating',
    locationId: null,
    parentId: null,
    sensorType: 'energy',
  },
  childrens: [],
  startOpen: false,
  hidden: false,
};

describe('TreeItem', () => {
  test.skip('renders with location icon', () => {
    const nodeWithLocation: TreeNode = {
      ...mockTreeNode,
      asset: null,
    };
    render(<TreeItem item={nodeWithLocation} />);

    expect(screen.getByTestId('location-icon')).toBeInTheDocument();
    expect(screen.getByText('Location 1')).toBeInTheDocument();
  });

  test.skip('renders with asset icon and status icon', () => {
    const nodeWithAsset: TreeNode = {
      ...mockTreeNode,
      location: null,
    };
    render(<TreeItem item={nodeWithAsset} />);

    expect(screen.getByTestId('cube-outline-icon')).toBeInTheDocument();
    expect(screen.getByText('Asset 1')).toBeInTheDocument();
    expect(screen.getByTestId('bolt-icon')).toBeInTheDocument();
  });

  test.skip('toggles open state and displays children', () => {
    const nodeWithChildren: TreeNode = {
      ...mockTreeNode,
      childrens: [
        {
          ...mockTreeNode,
          location: { id: '3', name: 'Child Location', parentId: null },
        },
      ],
    };
    render(<TreeItem item={nodeWithChildren}>Child Content</TreeItem>);

    // Verifica que o botão Chevron está presente
    const toggleButton = screen.getByRole('button', {
      name: /toggle children/i,
    });
    expect(toggleButton).toBeInTheDocument();

    // Verifica que o conteúdo das crianças não está visível inicialmente
    expect(screen.queryByText('Child Content')).toBeNull();

    // Clica no botão Chevron para abrir
    fireEvent.click(toggleButton);
    expect(screen.getByText('Child Content')).toBeInTheDocument();

    // Clica no botão Chevron para fechar
    fireEvent.click(toggleButton);
    expect(screen.queryByText('Child Content')).toBeNull();
  });

  test.skip('shows assets when there are no children', () => {
    const nodeWithAssetOnly: TreeNode = {
      ...mockTreeNode,
      childrens: [],
      asset: {
        id: '2',
        name: 'Asset 2',
        status: 'alert',
        locationId: null,
        parentId: null,
        sensorType: 'energy',
      },
    };
    render(<TreeItem item={nodeWithAssetOnly} />);

    expect(screen.getByTestId('elipse-icon')).toBeInTheDocument();
    expect(screen.getByText('Asset 2')).toBeInTheDocument();
  });
});
