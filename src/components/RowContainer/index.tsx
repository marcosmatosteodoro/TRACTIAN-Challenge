'use client';

import { Company } from '@/domain';
import { Flex, Text } from '@chakra-ui/react';
import { InfoIcon, SecondaryButton, ThunderboltIcon } from '../';

type RowContainerProps = {
  company: Company;
};

export const RowContainer = ({ company }: RowContainerProps) => {
  return (
    <Flex justifyContent={'space-between'}>
      <Flex alignItems={'center'} gap={'7px'}>
        <Text
          fontSize={'20px'}
          fontWeight={600}
          lineHeight={'28px'}
          color={'#24292F'}
        >
          Ativos
        </Text>

        <Text
          fontSize={'14px'}
          fontWeight={400}
          lineHeight={'20px'}
          textAlign={'center'}
          color={'#77818C'}
        >
          / {company.name} Unit
        </Text>
      </Flex>

      <Flex gap={'8px'}>
        <SecondaryButton
          icon={<ThunderboltIcon w={'16px'} h={'16px'} m={0} />}
          onClick={() => {}}
        >
          Sensor de Energia
        </SecondaryButton>

        <SecondaryButton
          icon={<InfoIcon w={'16px'} h={'16px'} m={0} />}
          onClick={() => {}}
        >
          Critico
        </SecondaryButton>
      </Flex>
    </Flex>
  );
};
