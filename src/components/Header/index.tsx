'use client';

import { Box, Flex } from '@chakra-ui/react';
import { CompanyButton, LogoIcon } from '../';
import { CompanyState } from '../../domain';

type HeaderProps = {
  companies: CompanyState[];
};

export const Header = ({ companies }: HeaderProps) => {
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
        {companies.map((company) => (
          <CompanyButton
            key={company.id}
            active={company.current}
            data-testid="company-button"
          >
            {company.name}
          </CompanyButton>
        ))}
      </Flex>
    </Flex>
  );
};
