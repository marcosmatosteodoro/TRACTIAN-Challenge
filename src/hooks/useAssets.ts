import { ApiError, Asset, CompanyState } from '@/domain/models';
import Api from '@/services/ApiService';
import { useState } from 'react';
import { useQuery } from 'react-query';

const fetchAssets = async (companyId: string): Promise<Asset[]> => {
  const api = new Api();
  const data = await api.assets(companyId);
  return data;
};

const useAssets = (currentCompany: CompanyState | null) => {
  const [currentAsset, setCurrentAsset] = useState<Asset | null>(null);

  const { data, error, isLoading } = useQuery<Asset[], ApiError>(
    ['assets', currentCompany?.id],
    () => fetchAssets(currentCompany?.id || ''),
    {
      enabled: !!currentCompany,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
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
