import { ApiError, CompanyState, Location } from '@/domain/models';
import Api from '@/services/ApiService';
import { useQuery } from 'react-query';

const fetchLocations = async (companyId: string): Promise<Location[]> => {
  const api = new Api();
  const data = await api.locations(companyId);
  return data;
};

const useLocations = (currentCompany: CompanyState | null) => {
  return useQuery<Location[], ApiError>(
    ['locations', currentCompany?.id],
    () => fetchLocations(currentCompany?.id || ''),
    {
      enabled: !!currentCompany,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
    },
  );
};

export default useLocations;
