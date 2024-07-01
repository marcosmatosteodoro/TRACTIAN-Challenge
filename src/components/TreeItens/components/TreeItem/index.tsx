import { TreeNode } from '@/domain/models';
import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { useTreeItem } from '../../hooks/useTreeItem';
import { ChevronIcon } from '../ChevronIcon';

type TreeItemProps = {
  item: TreeNode;
  children?: React.ReactNode;
  changeCurrentAsset: (id: string) => void;
  isActive: boolean;
};

export const TreeItem = ({
  item,
  children,
  changeCurrentAsset,
  isActive,
}: TreeItemProps) => {
  const { location, asset, childrens } = item;
  const { typeIcon, statusIcon, click, isOpen } = useTreeItem({
    item,
    changeCurrentAsset,
    isActive,
  });

  if (item?.hidden) {
    return <></>;
  }

  return (
    <Box>
      <Button variant="treeItem" onClick={click} isActive={isActive}>
        <ChevronIcon isOpen={isOpen} childrens={childrens} />
        {typeIcon}

        <Text
          color={isActive ? 'white' : 'tractianBlue'}
          variant={'treeItem'}
          data-testid="tree-item-text"
        >
          {location && location?.name}
          {asset && asset?.name}
        </Text>

        {asset && childrens.length === 0 && statusIcon}
      </Button>
      {isOpen && <Box pl="6">{children}</Box>}
    </Box>
  );
};
