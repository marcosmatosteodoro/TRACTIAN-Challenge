'use client';

import { Button } from '@chakra-ui/react';
import { GoldIcon } from '../';

type CompanyButtonProps = {
  children: React.ReactNode;
  active?: boolean;
  disableHover?: boolean;
  click: () => void;
};

export const CompanyButton = ({
  children,
  active,
  click,
  disableHover,
}: CompanyButtonProps) => {
  const primaryColor = '#2188FF';

  return (
    <Button
      bg={active === true ? primaryColor : '#023B78'}
      color={'#ffffff'}
      leftIcon={<GoldIcon h={'16px'} w={'16px'} />}
      onClick={click}
      _hover={
        !disableHover
          ? {
              bg: primaryColor,
              opacity: 0.9,
            }
          : undefined
      }
      data-testid="company-button"
    >
      {children} Unit
    </Button>
  );
};
