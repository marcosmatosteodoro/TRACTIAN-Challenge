import { TreeNode } from '@/domain';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
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
};

export const TreeItem = ({ item, children }: TreeItemProps) => {
  const { location, asset, childrens, startOpen } = item;

  const [isOpen, setIsOpen] = useState(startOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const showAssets = () => {
    alert('clicado');
  };

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

    return <CodepenIcon data-testid="codepen-icon" w={size} h={size} />;
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

  const makeChevronIcon = (childrens: TreeItemProps['item']['childrens']) => {
    if (childrens.length === 0) {
      return undefined;
    } else if (isOpen) {
      return <ChevronDownIcon />;
    } else {
      return <ChevronRightIcon />;
    }
  };

  const choicehandleToggle = (
    childrens: TreeItemProps['item']['childrens'],
  ) => {
    if (childrens.length > 0) {
      return handleToggle;
    } else {
      return showAssets;
    }
  };

  const typeIcon = choiceIcon(item);
  const statusIcon = choiceStatus(asset);
  const chevronIcon = makeChevronIcon(childrens);
  const click = choicehandleToggle(childrens);

  if (!item.hidden) {
    return <></>;
  }

  return (
    <Box>
      <Flex alignItems="center">
        <IconButton
          icon={chevronIcon}
          onClick={click}
          size="sm"
          variant="ghost"
          aria-label="Toggle children"
          mr="0"
          color={'black'}
          data-testid="toggle-children-button"
        />
        {typeIcon}

        <Text color={'black'} px={'4px'}>
          {location && location?.name}
          {asset && asset?.name}
        </Text>

        {asset && childrens.length === 0 && statusIcon}
      </Flex>
      {isOpen && <Box pl="6">{children}</Box>}
    </Box>
  );
};
