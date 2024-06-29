'use client';

import { Grid, GridItem } from '@chakra-ui/react';
import { Header, MainContent } from '../components';

export default function Home() {
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
        <MainContent />
      </GridItem>
    </Grid>
  );
}
