'use client';

import { Box, Flex, Input } from '@chakra-ui/react';
import { SearchIcon } from '../icons';

type SearchInputProps = {
  filterBySearch: (searchTerm: string) => void;
};

export const SearchInput = ({ filterBySearch }: SearchInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    filterBySearch(value);
  };

  return (
    <Flex
      w={'100%'}
      h={'45px'}
      borderBottomColor={'gray'}
      borderBottomWidth={'1px'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Input
        variant="outline"
        placeholder="Buscar Ativo ou Local"
        border={0}
        color={'tractianBlue'}
        w={'100%'}
        h={'100%'}
        onChange={handleChange}
        sx={{ '::placeholder': { color: 'placeholder' } }}
      />

      <Box p={'9px'}>
        <SearchIcon h={'14px'} w={'14px'} />
      </Box>
    </Flex>
  );
};
