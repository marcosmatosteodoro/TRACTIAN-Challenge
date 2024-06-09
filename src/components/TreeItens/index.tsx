import { TreeNode } from '@/domain';
import { Box } from '@chakra-ui/react';
import { TreeItem } from '../TreeItem';

type TreeItensProps = {
  treeNode: TreeNode[];
};

const renderTreeItems = (items: TreeNode[]) => {
  const getId = (item: TreeNode) => {
    if (item.location) {
      return item.location.id;
    } else if (item.asset) {
      return item.asset.id;
    }
    return '';
  };

  return items.map((item) => (
    <TreeItem key={getId(item)} item={item}>
      {item?.childrens?.length > 0 && renderTreeItems(item.childrens)}
    </TreeItem>
  ));
};

export const TreeItens = ({ treeNode }: TreeItensProps) => {
  return <Box>{renderTreeItems(treeNode)}</Box>;
};
