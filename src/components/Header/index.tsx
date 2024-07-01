'use client';

import useCompanies from '@/hooks/useCompanies';
import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { GoldIcon, Loading, LogoIcon } from '../';

export const Header = () => {
  const { data, isLoading, updateCompany } = useCompanies();

  return (
    <Flex
      w={'full'}
      h={'full'}
      alignItems={'center'}
      justifyContent={'space-between'}
      px={'16px'}
      py={'12px'}
      data-testid="header-container"
    >
      <Box>
        <LogoIcon h={'14px'} data-testid="logo-icon" />
      </Box>

      <Flex gap={'10px'}>
        {isLoading ? (
          <Loading color={'white'} size={'md'} />
        ) : (
          data?.map((company) => (
            <Button
              key={company.id}
              isActive={company.current}
              variant="company"
              onClick={() => updateCompany(company.id)}
              leftIcon={
                <Icon
                  as={GoldIcon}
                  h={'16px'}
                  w={'16px'}
                  display={{ base: 'none', md: 'block' }}
                  m={{ base: '0px', md: 'initial' }}
                />
              }
            >
              <Text ms={1} variant="button">
                {company.name} Unit
              </Text>
            </Button>
          ))
        )}
      </Flex>
    </Flex>
  );
};
