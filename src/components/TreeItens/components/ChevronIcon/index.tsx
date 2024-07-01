import { TreeNode } from '@/domain/models';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

type ChevronIconProps = {
  isOpen: boolean;
  childrens: TreeNode['childrens'];
};

export const ChevronIcon = ({ isOpen, childrens }: ChevronIconProps) => {
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
