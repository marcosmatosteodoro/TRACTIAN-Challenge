'use client';

import { Asset } from '@/domain/models';
import { Box } from '@chakra-ui/react';
import { BoltIcon, ElipseIcon } from '../icons';
import { AssetDetaillsContent, AssetDetaillsTop } from './components';

type AssetDetailsProps = {
  currentAsset: Asset | null;
};

export const AssetDetails = ({ currentAsset }: AssetDetailsProps) => {
  const choiceStatus = (asset: AssetDetailsProps['currentAsset']) => {
    const size = '8px';

    if (!asset?.id) {
      return <></>;
    }

    switch (asset?.status) {
      case 'operating':
        return (
          <BoltIcon
            data-testid="bolt-icon"
            color={'#52C41A'}
            w={'9px'}
            h={'11px'}
          />
        );
      case 'alert':
        return (
          <ElipseIcon
            data-testid="elipse-icon"
            color={'#ED3833'}
            w={size}
            h={size}
          />
        );
      default:
        return (
          <ElipseIcon
            data-testid="elipse-icon"
            color={'#52C41A'}
            w={size}
            h={size}
          />
        );
    }
  };

  const statusIcon = choiceStatus(currentAsset);
  return (
    <Box minH={'500px'} p={0} m={0}>
      <AssetDetaillsTop statusIcon={statusIcon} title={currentAsset?.name} />
      <AssetDetaillsContent />
    </Box>
  );
};
