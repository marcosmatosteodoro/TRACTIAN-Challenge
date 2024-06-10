'use client';

import { MdOutlineRouterIcon, WifiTetheringIcon } from '@/components/icons';
import { Box, Circle, Divider, Flex, Grid } from '@chakra-ui/react';
import { GroupAssetText } from '../GroupAssetText';

export const AssetDetaillsContent = () => {
  return (
    <Grid p={'24px'} m={0} w={'100%'} gap={'24px'}>
      <Grid
        w={'100%'}
        gap={'24px'}
        gridTemplateColumns={{base: '1fr 1fr', xl: '336px 1fr'}}
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
            Motor Elétrico (Trifásico)
          </GroupAssetText>

          <Divider color={'#E3EAEF'} bg={'#E3EAEF'} />

          <GroupAssetText title={'Responsáveis'}>
            <Circle bg={'#2188FF'} size={'24px'} color={'white'}>
              E
            </Circle>
            Elétrica
          </GroupAssetText>
        </Flex>
      </Grid>

      <Divider color={'#E3EAEF'} bg={'#E3EAEF'} />

      <Flex>
        <GroupAssetText title={'Sensor'}>
          <WifiTetheringIcon w={'20px'} h={'20px'} />
          HIO4510
        </GroupAssetText>

        <GroupAssetText title={'Receptor'}>
          <MdOutlineRouterIcon w={'20px'} h={'20px'} />
          EUH4R27
        </GroupAssetText>
      </Flex>
    </Grid>
  );
};
