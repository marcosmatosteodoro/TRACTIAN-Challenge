import { Asset, TreeNode } from '@/domain/models';
import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { TreeItem } from '../TreeItem';

type TreeItensProps = {
  treeNode: TreeNode[];
  changeCurrentAsset: (id: string) => void;
  currentAsset: Asset | null;
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
  const [findItem, setFindItem] = useState<boolean>(true);

  useEffect(() => {
    if (props?.treeNode?.find((item) => item.hidden === false)) {
      setFindItem(true);
    } else {
      setFindItem(false);
    }
  }, [props.treeNode]);

  return (
    <Box px={'8px'} py={'10px'}>
      {findItem ? (
        renderTreeItems(props)
      ) : (
        <Box>
          <Text
            fontSize={'16px'}
            fontWeight={'400'}
            lineHeight={'24px'}
            color={'#88929C'}
          >
            No items found
          </Text>
        </Box>
      )}
    </Box>
  );
};
