'use client';

import useCompanies from '@/hooks/useCompanies';
import { Box, Flex } from '@chakra-ui/react';
import { CompanyButton, Loading, LogoIcon } from '../';

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
          <Loading color={'#fff'} size={'md'} />
        ) : (
          data?.map((company) => (
            <CompanyButton
              key={company.id}
              active={company.current}
              click={() => updateCompany(company.id)}
              data-testid="company-button"
            >
              {company.name}
            </CompanyButton>
          ))
        )}
      </Flex>
    </Flex>
  );
};
