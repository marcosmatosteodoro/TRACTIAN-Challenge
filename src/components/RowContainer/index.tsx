'use client';

import { TreeNodeFilters } from '@/domain/models';
import useCompanies from '@/hooks/useCompanies';
import { InfoIcon } from '@chakra-ui/icons';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import { ThunderboltIcon } from '../';

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
        <Button
          variant="secondary"
          leftIcon={
            <Icon
              as={ThunderboltIcon}
              color={filter.thunderbolt ? '#ffffff' : '#2188FF'}
              w={'16px'}
              h={'16px'}
              m={0}
            />
          }
          onClick={filterByThunderbolt}
          isActive={filter.thunderbolt}
        >
          <Text variant={'button'}>Sensor de Energia</Text>
        </Button>

        <Button
          variant="secondary"
          leftIcon={
            <Icon
              as={InfoIcon}
              color={filter.alert ? '#ffffff' : '#2188FF'}
              w={'16px'}
              h={'16px'}
              m={0}
            />
          }
          onClick={filterByAlert}
          isActive={filter.alert}
        >
          <Text variant={'button'}>Critico</Text>
        </Button>
      </Flex>
    </Flex>
  );
};
