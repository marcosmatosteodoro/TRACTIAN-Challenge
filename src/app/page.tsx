'use client';

import useApi from '@/hooks/useApi.hook';
import { Grid, GridItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Header, MainContent } from '../components';
export default function Home() {
  const {
    bringCompanies,
    bringAssets,
    changeCurrentCompany,
    changeCurrentAsset,
    getTreeNode,
    companies,
    currentCompany,
    currentAsset,
    treeNode,
  } = useApi();

  useEffect(() => {
    bringCompanies();
  }, []);

  useEffect(() => {
    if (currentCompany?.id) {
      getTreeNode(currentCompany.id);
      bringAssets(currentCompany.id);
    }
  }, [currentCompany]);

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
        <Header
          companies={companies.data}
          changeCurrentCompany={changeCurrentCompany}
        />
      </GridItem>

      <GridItem m="8px" p={0} area={'main'} as="main">
        <MainContent
          changeCurrentAsset={changeCurrentAsset}
          currentAsset={currentAsset}
          currentCompany={currentCompany}
          treeNode={treeNode?.data}
        />
      </GridItem>
    </Grid>
  );
}
