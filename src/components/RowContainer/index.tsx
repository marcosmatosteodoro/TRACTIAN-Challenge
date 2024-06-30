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
        <Text variant="subtitleBlod">Ativos</Text>

        <Text variant="subtitle">/ {currentCompany?.name} Unit</Text>
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
