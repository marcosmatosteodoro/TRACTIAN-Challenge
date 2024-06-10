import { Assets, TreeNode } from '@/domain';
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
  currentAsset: Assets;
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
  currentAsset,
  changeCurrentAsset,
}: TreeItemProps) => {
  const { location, asset, childrens, startOpen } = item;

  const [isOpen, setIsOpen] = useState(startOpen);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const validation = !!currentAsset?.id && item.asset?.id === currentAsset.id;
    setIsActive(validation);
  }, [currentAsset, item]);

  useEffect(() => {
    setIsOpen(startOpen);
  }, [startOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
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

    return <CodepenIcon data-testid="codepen-icon" color={isActive ? '#ffffff' : '#2188FF'} w={size} h={size} />;
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
      return handleToggle;
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
      <Button
        alignItems="center"
        onClick={click}
        p={0}
        w={'full'}
        justifyContent={'flex-start'}
        bg={isActive ? '#2188FF' : '#ffffff'}
        _hover={{
          '& > p': {
            position: 'relative',
            _after: {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: '-2px',
              height: '1px',
              width: '100%',
              bg: isActive ? '#ffffff' : '#2188FF',
            },
          },
        }}
      >
        <ChevronIcon isOpen={isOpen} childrens={childrens} />
        {typeIcon}

        <Text
          color={isActive ? '#ffffff' : '#17192D'}
          px={'4px'}
          fontSize={'14px'}
          fontWeight={400}
          lineHeight={'22px'}
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
