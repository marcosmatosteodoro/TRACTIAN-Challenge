'use client';

import { Assets, TreeNode } from '@/domain';
import { Box } from '@chakra-ui/react';
import { SearchInput } from '../SearchInput';
import { TreeItens } from '../TreeItens';

type TreeNodeContentProps = {
  treeNode: TreeNode[];
  currentAsset: Assets;
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
    <Box minH={'500px'} p={0} m={0}>
      <SearchInput filterBySearch={filterBySearch} />
      <TreeItens
        treeNode={treeNode}
        changeCurrentAsset={changeCurrentAsset}
        currentAsset={currentAsset}
      />
    </Box>
  );
};
