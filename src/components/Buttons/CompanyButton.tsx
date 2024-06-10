'use client';

import { Button, Text } from '@chakra-ui/react';
import { GoldIcon } from '../';
import useButtons from './hooks/useButtonHook';

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
  const { primaryColor, secondaryColor, whiteColor } = useButtons();

  return (
    <Button
      bg={active === true ? primaryColor : secondaryColor}
      color={whiteColor}
      leftIcon={
        <GoldIcon
          h={'16px'}
          w={'16px'}
          display={{ base: 'none', md: 'block' }}
          m={{ base: '0px', md: 'initial' }}
        />
      }
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
      {children}
      <Text ms={1} display={{ base: 'none', md: 'block' }}>
        Unit
      </Text>
    </Button>
  );
};
