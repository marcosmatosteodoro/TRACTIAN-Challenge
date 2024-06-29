import { ApiError, Asset, CompanyState } from '@/domain/models';
import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';

const fetchAssets = async (companyId: string): Promise<Asset[]> => {
  const { data } = await axios.get<Asset[]>(
    `https://fake-api.tractian.com/companies/${companyId}/assets`,
  );
  return data;
};

const useAssets = (currentCompany: CompanyState | null) => {
  const [currentAsset, setCurrentAsset] = useState<Asset | null>(null);

  const { data, error, isLoading } = useQuery<Asset[], ApiError>(
    ['assets', currentCompany?.id],
    () => fetchAssets(currentCompany?.id || ''),
    {
      enabled: !!currentCompany,
    },
  );

  const updateAsset = (assetId: string) => {
    const assetToUpdate = data?.find((asset) => asset.id === assetId) || null;
    setCurrentAsset(assetToUpdate);
  };

  return {
    data,
    error,
    isLoading,
    currentAsset,
    updateAsset,
  };
};

export default useAssets;
