'use client';

import { Button } from '@chakra-ui/react';

type SecondaryButtonProps = {
  children: React.ReactNode;
  icon: React.ReactElement;
  onClick: () => void;
};

export const SecondaryButton = ({
  children,
  icon,
  onClick,
}: SecondaryButtonProps) => {
  return (
    <Button
      borderRadius={'3px'}
      borderWidth={'1px'}
      borderColor={'#D8DFE6'}
      p={'6px, 16px, 6px, 14px'}
      gap={'6px'}
      bg={'#FFFFFF'}
      fontSize={'14px'}
      fontWeight={600}
      lineHeight={'20px'}
      color={'#77818C'}
      leftIcon={icon}
      onClick={onClick}
      data-testid="secondary-button"
    >
      {children}
    </Button>
  );
};
