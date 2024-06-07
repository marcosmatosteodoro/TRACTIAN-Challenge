'use client';

import { chakra, ChakraProps } from '@chakra-ui/react';

type ElipseIconProps = {
  color?: string;
} & ChakraProps;

export const ElipseIcon = (props: ElipseIconProps) => {
  return (
    <chakra.svg
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="elipse-icon"
      {...props}
    >
      <circle cx="4" cy="4.5" r="4" fill={props.color ?? '#52C41A'} />
    </chakra.svg>
  );
};
