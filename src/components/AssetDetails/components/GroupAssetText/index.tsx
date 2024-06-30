'use client';

import { Box, Text } from '@chakra-ui/react';

type GroupAssetTextProps = {
  title: string;
  children?: React.ReactNode;
};

export const GroupAssetText = ({ title, children }: GroupAssetTextProps) => {
  return (
    <Box w={'100%'}>
      <Text variant="primary">{title}</Text>

      <Box display={'flex'} alignItems={'center'} gap={'8px'}>
        {children}
      </Box>
    </Box>
  );
};
