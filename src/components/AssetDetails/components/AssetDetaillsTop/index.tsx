'use client';

import { Flex, Text } from '@chakra-ui/react';

type AssetDetaillsTopProps = {
  title: string | undefined;
  statusIcon: JSX.Element;
};

export const AssetDetaillsTop = ({
  title,
  statusIcon,
}: AssetDetaillsTopProps) => {
  return (
    <Flex
      w={'100%'}
      h={'56px'}
      px={'16px'}
      borderBottomColor={'#D8DFE6'}
      borderBottomWidth={'1px'}
      alignItems={'center'}
      gap={'8px'}
    >
      <Text variant="title">{title}</Text>
      {statusIcon}
    </Flex>
  );
};
