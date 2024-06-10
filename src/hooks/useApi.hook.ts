'use client';

import { AplicationContextType } from '@/context/AplicationContext';
import { Asset, CompanyState, Location } from '@/domain/models';
import Api from '@/services/Api.service';

interface UseApiReturnType {
  bringCompanies: () => Promise<void>;
  bringAssets: (id: string) => Promise<void>;
  bringLocations: (id: string) => Promise<void>;
}

const useApi = (application: AplicationContextType): UseApiReturnType => {
  const api = new Api();

  // TODO armazenar dados no localStorage para pegar mais rápido os dados, e depois sicroniza
  const { updateCompanies, updateAssets, updateLocations } = application;

  // const [companies, setCompanies] = useState<Response<CompanyState[]>>(
  //   {} as Response<CompanyState[]>,
  // );

  // const [assets, setAssets] = useState<Response<Asset[]>>(
  //   {} as Response<Asset[]>,
  // );

  // const [locations, setLocations] = useState<Response<Location[]>>(
  //   {} as Response<Location[]>,
  // );

  const bringCompanies = async () => {
    // setCompanies({ loading: true, error: null, data: {} as CompanyState[] });
    try {
      const response = await api.companies();
      const data = response.map((item, index) => ({
        ...item,
        current: index === 0,
      }));

      // setCompanies((prevState) => ({ ...prevState, data: data }));
      updateCompanies(data as CompanyState[]);
    } catch (err) {
      // setCompanies((prevState) => ({
      //   ...prevState,
      //   error: (err as Error).message,
      // }));
    } finally {
      // setCompanies((prevState) => ({ ...prevState, loading: false }));
    }
  };

  const bringLocations = async (id: string) => {
    // setLocations({ loading: true, error: null, data: {} as Location[] });
    try {
      const data = await api.locations(id);

      updateLocations(data as Location[]);
      // setLocations((prevState) => ({ ...prevState, data: data }));
    } catch (err) {
      // setLocations((prevState) => ({
      //   ...prevState,
      //   error: (err as Error).message,
      // }));
    } finally {
      // setLocations((prevState) => ({ ...prevState, loading: false }));
    }
  };

  const bringAssets = async (id: string) => {
    // setAssets({ loading: true, error: null, data: {} as Asset[] });
    try {
      const response = await api.assets(id);
      const data = response.map((item, index) => ({
        ...item,
        current: index === 0,
      }));

      updateAssets(data as Asset[]);
      // setAssets((prevState) => ({ ...prevState, data: data }));
    } catch (err) {
      // setAssets((prevState) => ({
      //   ...prevState,
      //   error: (err as Error).message,
      // }));
    } finally {
      // setAssets((prevState) => ({ ...prevState, loading: false }));
    }
  };

  return {
    bringCompanies,
    bringAssets,
    bringLocations,
  };
};

export default useApi;
