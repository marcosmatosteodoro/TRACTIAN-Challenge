'use client';

import { Assets, Company, TreeNode } from '@/domain';
import { Container, Grid } from '@chakra-ui/react';
import { AssetDetails } from '../AssetDetails';
import { CardContainer } from '../CardContainer';
import { Loading } from '../Loading';
import { RowContainer } from '../RowContainer';
import { TreeNodeContent } from '../TreeNodeContent';

type MainProps = {
  currentCompany: Company;
  currentAsset: Assets;
  changeCurrentAsset: (id: string) => void;
  treeNode: TreeNode[];
};

export const MainContent = ({
  currentCompany,
  currentAsset,
  treeNode,
  changeCurrentAsset,
}: MainProps) => {
  return (
    <Container maxW={'1700px'} h={'100%'}>
      <CardContainer>
        {currentCompany?.id && treeNode?.length > 0 ? (
          <>
            <RowContainer company={currentCompany} />

            <Grid gridTemplateColumns={'479px 1fr'} gap={'8px'}>
              <CardContainer padding={'0'}>
                <TreeNodeContent
                  changeCurrentAsset={changeCurrentAsset}
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
