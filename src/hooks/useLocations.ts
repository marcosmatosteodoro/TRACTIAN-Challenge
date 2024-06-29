import { ApiError, CompanyState, Location } from '@/domain/models';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchLocations = async (companyId: string): Promise<Location[]> => {
  const { data } = await axios.get<Location[]>(
    `https://fake-api.tractian.com/companies/${companyId}/locations`,
  );
  return data;
};

const useLocations = (currentCompany: CompanyState | null) => {
  return useQuery<Location[], ApiError>(
    ['locations', currentCompany?.id],
    () => fetchLocations(currentCompany?.id || ''),
    {
      enabled: !!currentCompany,
    },
  );
};

export default useLocations;
