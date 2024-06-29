'use client';

import { useAplicationContext } from '@/context/AplicationContext';
import useApi from '@/hooks/useApiHook';
import useTreeNode from '@/hooks/useTreeNodeHook';
import { Grid, GridItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Header, MainContent } from '../components';
export default function Home() {
  const application = useAplicationContext();

  const { bringCompanies, bringAssets, bringLocations } = useApi(application);

  const {
    getTreeNode,
    filterByAlert,
    filterBySearch,
    filterByThunderbolt,
    filter,
  } = useTreeNode({ application });

  const {
    currentCompany,
    currentAsset,
    assets,
    locations,
    treeNode,
    updateCurrentAsset,
  } = application;

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
    <Grid
      templateAreas={`"header header" "main main"`}
      gridTemplateRows={'75px 1fr'}
      minH={'100vh'}
      bg={'#D8DFE6'}
    >
      <GridItem
        p="0"
        bg="#17192D"
        area={'header'}
        as="header"
        position="sticky"
        top="0"
        zIndex="10"
      >
        <Header />
      </GridItem>

      <GridItem m="8px" p={0} area={'main'} as="main">
        <MainContent
          changeCurrentAsset={updateCurrentAsset}
          filterByAlert={filterByAlert}
          filterBySearch={filterBySearch}
          filterByThunderbolt={filterByThunderbolt}
          currentAsset={currentAsset}
          currentCompany={currentCompany}
          treeNode={treeNode}
          filter={filter}
        />
      </GridItem>
    </Grid>
  );
}
