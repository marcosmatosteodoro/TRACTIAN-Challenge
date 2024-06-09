'use client';

import { Box, Text } from '@chakra-ui/react';

type GroupAssetTextProps = {
  title: string;
  children?: React.ReactNode;
};

export const GroupAssetText = ({ title, children }: GroupAssetTextProps) => {
  return (
    <Box w={'100%'}>
      <Text
        fontWeight={'600'}
        fontSize={'16px'}
        lineHeight={'24px'}
        color={'#24292F'}
      >
        {title}
      </Text>

      <Text
        fontSize={'16px'}
        fontWeight={'400'}
        lineHeight={'24px'}
        color={'#88929C'}
        display={'flex'}
        gap={'8px'}
      >
        {children}
      </Text>
    </Box>
  );
};
