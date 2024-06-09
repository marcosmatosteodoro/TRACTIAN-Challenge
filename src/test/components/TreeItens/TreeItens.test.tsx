import { TreeNode } from '@/domain';
import { render, screen } from '@testing-library/react';
import { TreeItens } from '../../../components';

const mockTreeNode: TreeNode[] = [
  {
    location: { id: '1', name: 'Location 1', parentId: null },
    asset: null,
    childrens: [
      {
        location: { id: '2', name: 'Location 2', parentId: '1' },
        asset: null,
        childrens: [],
        startOpen: false,
        hidden: false,
      },
    ],
    startOpen: false,
    hidden: false,
  },
  {
    location: null,
    asset: {
      id: '3',
      name: 'Asset 1',
      status: 'operating',
      locationId: null,
      parentId: null,
      sensorType: 'energy',
    },
    childrens: [],
    startOpen: false,
    hidden: false,
  },
];

describe('TreeItens', () => {
  test.skip('renders tree items correctly', () => {
    render(<TreeItens treeNode={mockTreeNode} />);

    // Verifica que o primeiro nível de TreeItem foi renderizado
    expect(screen.getByTestId('location-icon')).toBeInTheDocument();
    expect(screen.getByText('Location 1')).toBeInTheDocument();
    expect(screen.getByTestId('bolt-icon')).toBeInTheDocument();
    expect(screen.getByText('Asset 1')).toBeInTheDocument();

    // Verifica que o segundo nível de TreeItem foi renderizado
    expect(screen.getByText('Location 2')).toBeInTheDocument();
  });

  test.skip('renders nested tree items correctly', () => {
    render(<TreeItens treeNode={mockTreeNode} />);

    // Verifica que o TreeItem está aninhado corretamente
    const parentItem = screen.getByText('Location 1');
    const childItem = screen.getByText('Location 2');

    // Verifica a hierarquia dos itens
    expect(screen.getByTestId('tree-item')).toContainElement(childItem);
  });
});
