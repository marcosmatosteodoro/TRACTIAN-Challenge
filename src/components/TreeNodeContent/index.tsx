'use client';

import { Assets, TreeNode } from '@/domain';
import { Box } from '@chakra-ui/react';
import { SearchInput } from '../SearchInput';
import { TreeItens } from '../TreeItens';

type TreeNodeContentProps = {
  treeNode: TreeNode[];
  changeCurrentAsset: (id: string) => void;
  currentAsset: Assets;
};

export const TreeNodeContent = ({
  treeNode,
  changeCurrentAsset,
  currentAsset,
}: TreeNodeContentProps) => {
  return (
    <Box minH={'500px'} p={0} m={0}>
      <SearchInput change={() => {}} />
      <TreeItens
        treeNode={treeNode}
        changeCurrentAsset={changeCurrentAsset}
        currentAsset={currentAsset}
      />
    </Box>
  );
};
