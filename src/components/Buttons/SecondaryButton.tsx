'use client';

import { Button, Text } from '@chakra-ui/react';
import useButtons from './hooks/useButtonHook';

type SecondaryButtonProps = {
  children: React.ReactNode;
  icon: 'thunderbolt' | 'infoIcon';
  active: boolean;
  onClick: () => void;
};

export const SecondaryButton = ({
  children,
  icon,
  active,
  onClick,
}: SecondaryButtonProps) => {
  const { primaryColor, choiceIcon, grayColor, whiteColor } = useButtons();

  return (
    <Button
      borderRadius={'3px'}
      borderWidth={'1px'}
      borderColor={'#D8DFE6'}
      p={'6px, 16px, 6px, 14px'}
      gap={'6px'}
      bg={active ? primaryColor : whiteColor}
      fontSize={'14px'}
      fontWeight={600}
      lineHeight={'20px'}
      color={active ? whiteColor : grayColor}
      leftIcon={choiceIcon({ active, icon })}
      onClick={onClick}
      _hover={{
        bg: grayColor,
        color: whiteColor,
      }}
      sx={{
        span: {
          margin: { base: 0, md: 'initial' },
        },
      }}
      data-testid="secondary-button"
    >
      <Text display={{ base: 'none', md: 'block' }}>{children}</Text>
    </Button>
  );
};
