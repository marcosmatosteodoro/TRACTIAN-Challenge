'use client';

import { Asset, Company, TreeNode, TreeNodeFilters } from '@/domain/models';
import { Container, Grid } from '@chakra-ui/react';
import { AssetDetails } from '../AssetDetails';
import { CardContainer } from '../CardContainer';
import { Loading } from '../Loading';
import { RowContainer } from '../RowContainer';
import { TreeNodeContent } from '../TreeNodeContent';

type MainProps = {
  currentCompany: Company;
  currentAsset: Asset;
  treeNode: TreeNode[];
  filter: TreeNodeFilters;
  changeCurrentAsset: (id: string) => void;
  filterByAlert: () => void;
  filterBySearch: (text: string) => void;
  filterByThunderbolt: () => void;
};

export const MainContent = ({
  currentCompany,
  currentAsset,
  treeNode,
  filter,
  changeCurrentAsset,
  filterByAlert,
  filterByThunderbolt,
  filterBySearch,
}: MainProps) => {
  return (
    <Container maxW={'1700px'} h={'100%'}>
      <CardContainer>
        {currentCompany?.id && treeNode?.length > 0 ? (
          <>
            <RowContainer
              company={currentCompany}
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
                  changeCurrentAsset={changeCurrentAsset}
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
