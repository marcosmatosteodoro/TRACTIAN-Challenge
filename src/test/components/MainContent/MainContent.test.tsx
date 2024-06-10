import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { MainContent } from '../../../components';
import {
  Asset,
  Company,
  TreeNode,
  TreeNodeFilters,
} from '../../../domain/models';

describe('MainContent', () => {
  const mockCompany: Company = { id: '1', name: 'Company A' };
  const mockAsset: Asset = {
    id: '1',
    name: 'Test Asset',
    status: 'operating',
    locationId: '1',
    parentId: '1',
    sensorType: 'energy',
  };
  const mockTreeNode: TreeNode[] = [
    {
      location: null,
      asset: null,
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
    },
    {
      location: null,
      asset: null,
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
    },
  ];
  const mockFilter: TreeNodeFilters = {
    alert: false,
    thunderbolt: false,
    search: '',
  };

  it.skip('renders component correctly', () => {
    render(
      <ChakraProvider>
        <MainContent
          currentCompany={mockCompany}
          currentAsset={mockAsset}
          treeNode={mockTreeNode}
          filter={mockFilter}
          changeCurrentAsset={() => {}}
          filterByAlert={() => {}}
          filterByThunderbolt={() => {}}
          filterBySearch={() => {}}
        />
      </ChakraProvider>,
    );
    const component = screen.getByTestId('main-content');
    expect(component).toBeInTheDocument();
  });

  it.skip('renders loading spinner when no company or tree nodes are present', () => {
    render(
      <ChakraProvider>
        <MainContent
          currentCompany={{ id: '', name: '' }}
          currentAsset={mockAsset}
          treeNode={[]}
          filter={mockFilter}
          changeCurrentAsset={() => {}}
          filterByAlert={() => {}}
          filterByThunderbolt={() => {}}
          filterBySearch={() => {}}
        />
      </ChakraProvider>,
    );
    const loadingSpinner = screen.getByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });

  it.skip('renders row container when company and tree nodes are present', () => {
    render(
      <ChakraProvider>
        <MainContent
          currentCompany={mockCompany}
          currentAsset={mockAsset}
          treeNode={mockTreeNode}
          filter={mockFilter}
          changeCurrentAsset={() => {}}
          filterByAlert={() => {}}
          filterByThunderbolt={() => {}}
          filterBySearch={() => {}}
        />
      </ChakraProvider>,
    );
    const rowContainer = screen.getByTestId('row-container');
    expect(rowContainer).toBeInTheDocument();
  });

  it.skip('renders tree node content when company and tree nodes are present', () => {
    render(
      <ChakraProvider>
        <MainContent
          currentCompany={mockCompany}
          currentAsset={mockAsset}
          treeNode={mockTreeNode}
          filter={mockFilter}
          changeCurrentAsset={() => {}}
          filterByAlert={() => {}}
          filterByThunderbolt={() => {}}
          filterBySearch={() => {}}
        />
      </ChakraProvider>,
    );
    const treeNodeContent = screen.getByTestId('tree-node-content');
    expect(treeNodeContent).toBeInTheDocument();
  });

  it.skip('renders asset details when company and tree nodes are present', () => {
    render(
      <ChakraProvider>
        <MainContent
          currentCompany={mockCompany}
          currentAsset={mockAsset}
          treeNode={mockTreeNode}
          filter={mockFilter}
          changeCurrentAsset={() => {}}
          filterByAlert={() => {}}
          filterByThunderbolt={() => {}}
          filterBySearch={() => {}}
        />
      </ChakraProvider>,
    );
    const assetDetails = screen.getByTestId('asset-details');
    expect(assetDetails).toBeInTheDocument();
  });
});
