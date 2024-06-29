import { ApiError, CompanyState } from '@/domain/models';
import Api from '@/services/ApiService';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export type UseCompaniesProps = {
  data: CompanyState[] | undefined;
  error: ApiError | null;
  isLoading: boolean;
  currentCompany: CompanyState | null;
  updateCompany: (id: string) => void;
};

const fetchCompanies = async (): Promise<CompanyState[]> => {
  const api = new Api();
  const data = await api.companies();

  return data.map((company, index) => ({
    ...company,
    current: index === 0,
  }));
};

const useCompanies = (): UseCompaniesProps => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery<CompanyState[], ApiError>(
    'companies',
    fetchCompanies,
  );

  const updateCompanyMutation = useMutation(
    async (id: string) => {
      if (!data) throw new Error('No companies data');

      return data.map((company) => ({
        ...company,
        current: company.id === id,
      }));
    },
    {
      onSuccess: (updatedCompanies) => {
        queryClient.setQueryData('companies', updatedCompanies);
      },
    },
  );

  const updateCompany = (id: string) => {
    updateCompanyMutation.mutate(id);
  };

  const currentCompany = data?.find((company) => company.current) || null;

  return {
    data,
    error,
    isLoading,
    currentCompany,
    updateCompany,
  };
};

export default useCompanies;
