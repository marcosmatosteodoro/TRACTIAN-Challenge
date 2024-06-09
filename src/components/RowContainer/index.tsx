'use client';

import { Company } from '@/domain';
import { TreeNodeFilters } from '@/hooks/useTreeNode.hook';
import { Flex, Text } from '@chakra-ui/react';
import { SecondaryButton } from '../';

type RowContainerProps = {
  company: Company;
  filter: TreeNodeFilters;
  filterByAlert: () => void;
  filterByThunderbolt: () => void;
};

export const RowContainer = ({
  company,
  filterByAlert,
  filterByThunderbolt,
  filter,
}: RowContainerProps) => {
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
          icon={'thunderbolt'}
          onClick={filterByThunderbolt}
          active={filter.thunderbolt}
        >
          Sensor de Energia
        </SecondaryButton>

        <SecondaryButton
          icon={'infoIcon'}
          onClick={filterByAlert}
          active={filter.alert}
        >
          Critico
        </SecondaryButton>
      </Flex>
    </Flex>
  );
};
