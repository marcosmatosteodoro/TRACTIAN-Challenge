'use client';

import { ThunderboltIcon } from '@/components/icons';
import { InfoIcon } from '@chakra-ui/icons';

interface UseButtonsReturnType {
  whiteColor: string;
  grayColor: string;
  primaryColor: string;
  secondaryColor: string;
  choiceIcon: ({
    active,
    icon,
  }: {
    active: boolean;
    icon: string;
  }) => JSX.Element;
}

const useButtons = (): UseButtonsReturnType => {
  const whiteColor = '#FFFFFF';
  const grayColor = '#77818C';
  const primaryColor = '#2188FF';
  const secondaryColor = '#023B78';

  const choiceIcon = ({ active, icon }: { active: boolean; icon: string }) => {
    const size = '16px';
    const color = active ? whiteColor : primaryColor;
    switch (icon) {
      case 'thunderbolt':
        return <ThunderboltIcon color={color} w={size} h={size} m={0} />;
      case 'infoIcon':
        return <InfoIcon color={color} w={size} h={size} m={0} />;
      default:
        return <></>;
    }
  };

  return {
    whiteColor,
    grayColor,
    primaryColor,
    secondaryColor,
    choiceIcon,
  };
};

export default useButtons;
