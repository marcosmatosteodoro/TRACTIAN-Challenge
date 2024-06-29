'use client';

import useAssets from '@/hooks/useAssets';
import useCompanies from '@/hooks/useCompanies';
import useLocations from '@/hooks/useLocations';
import useTreeNode from '@/hooks/useTreeNodeHook';
import { Container, Grid } from '@chakra-ui/react';
import { useEffect } from 'react';
import { AssetDetails } from '../AssetDetails';
import { CardContainer } from '../CardContainer';
import { Loading } from '../Loading';
import { RowContainer } from '../RowContainer';
import { TreeNodeContent } from '../TreeNodeContent';

export const MainContent = () => {
  const { currentCompany } = useCompanies();
  const assets = useAssets(currentCompany);
  const locations = useLocations(currentCompany);

  const {
    getTreeNode,
    filterByAlert,
    filterBySearch,
    filterByThunderbolt,
    filter,
    treeNode,
  } = useTreeNode();

  useEffect(() => {
    if (assets.data && locations.data) {
      getTreeNode({ assets: assets.data, locations: locations.data });
    }
  }, [assets.data, locations.data]);

  return (
    <Container maxW={'1700px'} h={'100%'}>
      <CardContainer>
        {treeNode?.length > 0 ? (
          <>
            <RowContainer
              filter={filter}
              filterByAlert={filterByAlert}
              filterByThunderbolt={filterByThunderbolt}
            />

            <Grid
              gridTemplateColumns={{
                base: '1fr',
                md: 'auto 1fr',
                lg: '479px 1fr',
              }}
              gridTemplateRows={{ base: '250px 1fr', md: '1fr' }}
              gap={'8px'}
            >
              <CardContainer padding={'0'}>
                <TreeNodeContent
                  changeCurrentAsset={assets.updateAsset}
                  filterBySearch={filterBySearch}
                  currentAsset={assets.currentAsset}
                  treeNode={treeNode}
                />
              </CardContainer>

              <CardContainer padding={'0'}>
                <AssetDetails currentAsset={assets.currentAsset} />
              </CardContainer>
            </Grid>
          </>
        ) : (
          <Loading />
        )}
      </CardContainer>
    </Container>
  );
};
