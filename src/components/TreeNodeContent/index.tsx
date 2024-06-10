'use client';

import { Asset, TreeNode } from '@/domain/models';
import { Box } from '@chakra-ui/react';
import { SearchInput } from '../SearchInput';
import { TreeItens } from '../TreeItens';

type TreeNodeContentProps = {
  treeNode: TreeNode[];
  currentAsset: Asset;
  changeCurrentAsset: (id: string) => void;
  filterBySearch: (text: string) => void;
};

export const TreeNodeContent = ({
  treeNode,
  currentAsset,
  changeCurrentAsset,
  filterBySearch,
}: TreeNodeContentProps) => {
  return (
    <Box p={0} m={0} overflow={'auto'}>
      <SearchInput filterBySearch={filterBySearch} />
      <TreeItens
        treeNode={treeNode}
        changeCurrentAsset={changeCurrentAsset}
        currentAsset={currentAsset}
      />
    </Box>
  );
};
