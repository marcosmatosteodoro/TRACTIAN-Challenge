'use client';

import { Button, Text } from '@chakra-ui/react';
import { InfoIcon, ThunderboltIcon } from '../icons';

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
  const whiteColor = '#FFFFFF';
  const grayColor = '#77818C';
  const blueColor = '#2188FF';

  const choiceIcon = (icon: string) => {
    const size = '16px';
    const color = active ? whiteColor : blueColor;
    switch (icon) {
      case 'thunderbolt':
        return <ThunderboltIcon color={color} w={size} h={size} m={0} />;
      case 'infoIcon':
        return <InfoIcon color={color} w={size} h={size} m={0} />;
    }
  };

  return (
    <Button
      borderRadius={'3px'}
      borderWidth={'1px'}
      borderColor={'#D8DFE6'}
      p={'6px, 16px, 6px, 14px'}
      gap={'6px'}
      bg={active ? blueColor : whiteColor}
      fontSize={'14px'}
      fontWeight={600}
      lineHeight={'20px'}
      color={active ? whiteColor : grayColor}
      leftIcon={choiceIcon(icon)}
      onClick={onClick}
      _hover={{
        bg: grayColor,
        color: whiteColor,
      }}
      sx={{
        'span': {
          margin: { base: 0, md: 'initial' },
        },
      }}
      data-testid="secondary-button"
    >
      <Text display={{base: 'none', md: 'block'}}>
        {children}
      </Text>
    </Button>
  );
};
