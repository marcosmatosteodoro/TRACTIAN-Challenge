'use client';

import { Box, Flex } from '@chakra-ui/react';
import { CompanyButton, Loading, LogoIcon } from '../';
import { CompanyState } from '../../domain';

type HeaderProps = {
  companies: CompanyState[];
  changeCurrentCompany: (id: string) => void;
};

export const Header = ({ companies, changeCurrentCompany }: HeaderProps) => {
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
        {companies && companies?.length > 0 ? (
          companies.map((company) => (
            <CompanyButton
              key={company.id}
              active={company.current}
              click={() => changeCurrentCompany(company.id)}
              data-testid="company-button"
            >
              {company.name}
            </CompanyButton>
          ))
        ) : (
          <Loading color={'#fff'} size={'md'} />
        )}
      </Flex>
    </Flex>
  );
};
