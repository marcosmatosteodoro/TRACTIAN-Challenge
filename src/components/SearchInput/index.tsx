'use client';

import { Box, Flex, Input } from '@chakra-ui/react';
import { SearchIcon } from '../icons';

type SearchInputProps = {
  change: () => void;
};

export const SearchInput = ({ change }: SearchInputProps) => (
  <Flex
    w={'100%'}
    h={'45px'}
    borderBottomColor={'#D8DFE6'}
    borderBottomWidth={'1px'}
    alignItems={'center'}
    justifyContent={'space-between'}
  >
    <Input
      variant="outline"
      placeholder="Buscar Ativo ou Local"
      border={0}
      color={'#17192D'}
      w={'100%'}
      h={'100%'}
      onChange={change}
      sx={{ '::placeholder': { color: '#C1C9D2' } }}
    />

    <Box p={'9px'}>
      <SearchIcon h={'14px'} w={'14px'} />
    </Box>
  </Flex>
);
