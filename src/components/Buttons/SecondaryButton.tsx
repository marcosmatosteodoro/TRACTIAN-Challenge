'use client';

import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { InfoIcon, ThunderboltIcon } from '../icons';

type SecondaryButtonProps = {
  children: React.ReactNode;
  icon: 'thunderbolt' | 'infoIcon';
  onClick: () => void;
};

export const SecondaryButton = ({
  children,
  icon,
  onClick,
}: SecondaryButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  const whiteColor = '#FFFFFF';
  const grayColor = '#77818C';
  const blueColor = '#2188FF';

  const handleActive = () => {
    onClick();
    setIsActive(!isActive);
  };

  const choiceIcon = (icon: string) => {
    const size = '16px';
    const color = isActive ? whiteColor : blueColor;
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
      bg={isActive ? blueColor : whiteColor}
      fontSize={'14px'}
      fontWeight={600}
      lineHeight={'20px'}
      color={isActive ? whiteColor : grayColor}
      leftIcon={choiceIcon(icon)}
      onClick={handleActive}
      _hover={{
        bg: grayColor,
        color: whiteColor,
      }}
      data-testid="secondary-button"
    >
      {children}
    </Button>
  );
};
