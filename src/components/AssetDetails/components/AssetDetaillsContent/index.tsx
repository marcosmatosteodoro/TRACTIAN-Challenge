'use client';

import { Box, Circle, Divider, Flex, Grid, Text } from '@chakra-ui/react';
import { MdOutlineRouterIcon, WifiTetheringIcon } from '../../../';
import { GroupAssetText } from '../GroupAssetText';

export const AssetDetaillsContent = () => {
  return (
    <Grid p={'24px'} m={0} w={'100%'} gap={'24px'}>
      <Grid
        w={'100%'}
        gap={'24px'}
        gridTemplateColumns={{ base: '1fr 1fr', xl: '336px 1fr' }}
      >
        <Box
          w={'100%'}
          h={'auto'}
          minH={'226px'}
          borderRadius={'4px'}
          bgImage={'url(/image.png)'}
        />

        <Flex
          w={'100%'}
          gap={'24px'}
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <GroupAssetText title={'Tipo de Equipamenteo'}>
            <Text variant="secondary">Motor Elétrico (Trifásico)</Text>
          </GroupAssetText>

          <Divider />

          <GroupAssetText title={'Responsáveis'}>
            <Circle bg={'primary'} size={'24px'} color={'white'}>
              E
            </Circle>
            <Text variant="secondary">Elétrica</Text>
          </GroupAssetText>
        </Flex>
      </Grid>

      <Divider />

      <Flex>
        <GroupAssetText title={'Sensor'}>
          <WifiTetheringIcon w={'20px'} h={'20px'} />
          <Text variant="secondary">HIO4510</Text>
        </GroupAssetText>

        <GroupAssetText title={'Receptor'}>
          <MdOutlineRouterIcon w={'20px'} h={'20px'} />
          <Text variant="secondary">EUH4R27</Text>
        </GroupAssetText>
      </Flex>
    </Grid>
  );
};
