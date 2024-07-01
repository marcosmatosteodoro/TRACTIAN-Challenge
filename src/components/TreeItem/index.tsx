import { TreeNode } from '@/domain/models';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
  BoltIcon,
  CodepenIcon,
  CubeOutlineIcon,
  ElipseIcon,
  LocationIcon,
} from '../icons';

type TreeItemProps = {
  item: TreeNode;
  children?: React.ReactNode;
  changeCurrentAsset: (id: string) => void;
  isActive: boolean;
};

type ChevronIconProps = {
  isOpen: boolean;
  childrens: TreeNode['childrens'];
};

const ChevronIcon = ({ isOpen, childrens }: ChevronIconProps) => {
  if (childrens.length === 0) {
    return <></>;
  }

  if (isOpen) {
    return (
      <ChevronDownIcon
        aria-label="Toggle children"
        mr="0"
        color={'black'}
        data-testid="toggle-children-button"
      />
    );
  }

  return (
    <ChevronRightIcon
      aria-label="Toggle children"
      mr="0"
      color={'black'}
      data-testid="toggle-children-button"
    />
  );
};

export const TreeItem = ({
  item,
  children,
  changeCurrentAsset,
  isActive,
}: TreeItemProps) => {
  const { location, asset, childrens, startOpen } = item;
  const [isOpen, setIsOpen] = useState(startOpen);

  useEffect(() => {
    setIsOpen(startOpen);
  }, [startOpen]);

  const choiceIcon = ({
    location,
    asset,
    childrens,
  }: TreeItemProps['item']) => {
    const size = '22px';

    if (location) {
      return <LocationIcon data-testid="location-icon" w={size} h={size} />;
    }

    if (asset && childrens.length > 0) {
      return (
        <CubeOutlineIcon data-testid="cube-outline-icon" w={size} h={size} />
      );
    }

    return (
      <CodepenIcon
        data-testid="codepen-icon"
        color={isActive ? '#ffffff' : '#2188FF'}
        w={size}
        h={size}
        ml={1}
      />
    );
  };

  const choiceStatus = (asset: TreeItemProps['item']['asset']) => {
    const size = '8px';

    switch (asset?.status) {
      case 'operating':
        return (
          <BoltIcon
            data-testid="bolt-icon"
            color={'#52C41A'}
            w={'9px'}
            h={'11px'}
          />
        );
      case 'alert':
        return (
          <ElipseIcon
            data-testid="elipse-icon"
            color={'#ED3833'}
            w={size}
            h={size}
          />
        );
      default:
        return (
          <ElipseIcon
            data-testid="elipse-icon"
            color={'#52C41A'}
            w={size}
            h={size}
          />
        );
    }
  };

  const choiceHandleToggle = (
    childrens: TreeItemProps['item']['childrens'],
  ) => {
    if (childrens.length > 0) {
      return () => setIsOpen(!isOpen);
    } else {
      return () => changeCurrentAsset(asset?.id || '');
    }
  };

  const typeIcon = choiceIcon(item);
  const statusIcon = choiceStatus(asset);
  const click = choiceHandleToggle(childrens);

  if (item.hidden) {
    return <></>;
  }

  return (
    <Box>
      <Button variant="treeItem" onClick={click} isActive={isActive}>
        <ChevronIcon isOpen={isOpen} childrens={childrens} />
        {typeIcon}

        <Text
          color={isActive ? '#ffffff' : '#17192D'}
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
