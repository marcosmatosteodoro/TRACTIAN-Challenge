'use client';

import { useAplicationContext } from '@/context/AplicationContext';
import useApi from '@/hooks/useApiHook';
import useCompanies from '@/hooks/useCompanies';
import useTreeNode from '@/hooks/useTreeNodeHook';
import { Container, Grid } from '@chakra-ui/react';
import { useEffect } from 'react';
import { AssetDetails } from '../AssetDetails';
import { CardContainer } from '../CardContainer';
import { Loading } from '../Loading';
import { RowContainer } from '../RowContainer';
import { TreeNodeContent } from '../TreeNodeContent';

export const MainContent = () => {
  // NOVO
  const { currentCompany } = useCompanies();
  //

  const application = useAplicationContext();
  const { bringCompanies, bringAssets, bringLocations } = useApi(application);

  const {
    getTreeNode,
    filterByAlert,
    filterBySearch,
    filterByThunderbolt,
    filter,
  } = useTreeNode({ application });

  const { currentAsset, assets, locations, treeNode, updateCurrentAsset } =
    application;

  useEffect(() => {
    bringCompanies();
  }, []);

  useEffect(() => {
    if (currentCompany?.id) {
      bringAssets(currentCompany.id);
      bringLocations(currentCompany.id);
    }
  }, [currentCompany]);

  useEffect(() => {
    if (assets && locations) {
      getTreeNode();
    }
  }, [assets, locations]);

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
                  changeCurrentAsset={updateCurrentAsset}
                  filterBySearch={filterBySearch}
                  currentAsset={currentAsset}
                  treeNode={treeNode}
                />
              </CardContainer>

              <CardContainer padding={'0'}>
                <AssetDetails currentAsset={currentAsset} />
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
