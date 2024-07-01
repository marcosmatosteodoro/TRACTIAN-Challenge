import { TreeNode } from '@/domain/models';
import { useEffect, useState } from 'react';
import {
  BoltIcon,
  CodepenIcon,
  CubeOutlineIcon,
  ElipseIcon,
  LocationIcon,
} from '../../icons';

type UseTreeItemProps = {
  item: TreeNode;
  changeCurrentAsset: (id: string) => void;
  isActive: boolean;
};

export const useTreeItem = ({
  item,
  changeCurrentAsset,
  isActive,
}: UseTreeItemProps) => {
  const { asset, childrens, startOpen } = item;
  const [isOpen, setIsOpen] = useState(startOpen);

  useEffect(() => {
    setIsOpen(startOpen);
  }, [startOpen]);

  const choiceIcon = ({ location, asset, childrens }: TreeNode) => {
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

  const choiceStatus = (asset: TreeNode['asset']) => {
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

  const choiceHandleToggle = (childrens: TreeNode['childrens']) => {
    if (childrens.length > 0) {
      return () => setIsOpen(!isOpen);
    } else {
      return () => changeCurrentAsset(asset?.id || '');
    }
  };

  const typeIcon = choiceIcon(item);
  const statusIcon = choiceStatus(asset);
  const click = choiceHandleToggle(childrens);

  return {
    isOpen,
    typeIcon,
    statusIcon,
    click,
  };
};
