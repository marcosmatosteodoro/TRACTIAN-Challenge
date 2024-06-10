// import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../app/page';

// jest.mock('../context/AplicationContext');
// jest.mock('../hooks/useApi.hook');
// jest.mock('../hooks/useTreeNode.hook');
// jest.mock('../components/Header', () => () => <div>Header</div>);
// jest.mock('../components/MainContent', () => () => <div>MainContent</div>);

describe('Home', () => {
  // const mockUseAplicationContext = {
  //   companies: [],
  //   currentCompany: { id: '1' },
  //   currentAsset: {},
  //   assets: [],
  //   locations: [],
  //   treeNode: [],
  //   updateCurrentCompany: jest.fn(),
  //   updateCurrentAsset: jest.fn(),
  // };

  const mockUseApi = {
    bringCompanies: jest.fn(),
    bringAssets: jest.fn(),
    bringLocations: jest.fn(),
  };

  const mockUseTreeNode = {
    getTreeNode: jest.fn(),
    filterByAlert: jest.fn(),
    filterBySearch: jest.fn(),
    filterByThunderbolt: jest.fn(),
    filter: jest.fn(),
  };

  // beforeEach(() => {
  //   (useAplicationContext as jest.Mock).mockReturnValue(mockUseAplicationContext);
  //   (useApi as jest.Mock).mockReturnValue(mockUseApi);
  //   (useTreeNode as jest.Mock).mockReturnValue(mockUseTreeNode);
  // });

  it('renders Home component correctly', async () => {
    render(<Home />);

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('MainContent')).toBeInTheDocument();

    expect(mockUseApi.bringCompanies).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(mockUseApi.bringAssets).toHaveBeenCalledWith('1');
      expect(mockUseApi.bringLocations).toHaveBeenCalledWith('1');
    });

    await waitFor(() => {
      expect(mockUseTreeNode.getTreeNode).toHaveBeenCalledTimes(1);
    });
  });
});
