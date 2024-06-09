import { Assets, TreeNode } from '@/domain';
import { Box } from '@chakra-ui/react';
import { TreeItem } from '../TreeItem';

type TreeItensProps = {
  treeNode: TreeNode[];
  changeCurrentAsset: (id: string) => void;
  currentAsset: Assets;
};

const renderTreeItems = ({
  treeNode,
  changeCurrentAsset,
  currentAsset,
}: TreeItensProps) => {
  const getId = (item: TreeNode) => {
    if (item.location) {
      return item.location.id;
    } else if (item.asset) {
      return item.asset.id;
    }
    return '';
  };

  return treeNode.map((item) => (
    <TreeItem
      key={getId(item)}
      item={item}
      changeCurrentAsset={changeCurrentAsset}
      currentAsset={currentAsset}
    >
      {item?.childrens?.length > 0 &&
        renderTreeItems({
          treeNode: item.childrens,
          changeCurrentAsset,
          currentAsset,
        })}
    </TreeItem>
  ));
};

export const TreeItens = (props: TreeItensProps) => {
  return (
    <Box px={'8px'} py={'10px'}>
      {renderTreeItems(props)}
    </Box>
  );
};
