'use client';

import { TreeNodeFilters } from '@/domain/models';
import useCompanies from '@/hooks/useCompanies';
import { Flex, Text } from '@chakra-ui/react';
import { SecondaryButton } from '../';

type RowContainerProps = {
  filter: TreeNodeFilters;
  filterByAlert: () => void;
  filterByThunderbolt: () => void;
};

export const RowContainer = ({
  filterByAlert,
  filterByThunderbolt,
  filter,
}: RowContainerProps) => {
  const { currentCompany } = useCompanies();

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
          / {currentCompany?.name} Unit
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
