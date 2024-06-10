'use client';

import { AplicationContextType } from '@/context/AplicationContext';
import { Assets, CompanyState, Locations, Response, TreeNode } from '@/domain/models';
import Api from '@/services/Api.service';
import { useState } from 'react';

interface UseApiReturnType {
  bringCompanies: () => Promise<void>;
  bringAssets: (id: string) => Promise<void>;
  bringLocations: (id: string) => Promise<void>;
}

const useApi = (application: AplicationContextType): UseApiReturnType => {
  const api = new Api();

  const { updateCompanies, updateAssets, updateLocations } =
    application;

  const [companies, setCompanies] = useState<Response<CompanyState[]>>(
    {} as Response<CompanyState[]>,
  );

  const [assets, setAssets] = useState<Response<Assets[]>>(
    {} as Response<Assets[]>,
  );

  const [locations, setLocations] = useState<Response<Locations[]>>(
    {} as Response<Locations[]>,
  );

  const [treeNode, setTreeNode] = useState<Response<TreeNode[]>>(
    {} as Response<TreeNode[]>,
  );

  const bringCompanies = async () => {
    setCompanies({ loading: true, error: null, data: {} as CompanyState[] });
    try {
      const response = await api.companies();
      const data = response.map((item, index) => ({
        ...item,
        current: index === 0,
      }));

      setCompanies((prevState) => ({ ...prevState, data: data }));
      updateCompanies(data as CompanyState[]);
    } catch (err) {
      setCompanies((prevState) => ({
        ...prevState,
        error: (err as Error).message,
      }));
    } finally {
      setCompanies((prevState) => ({ ...prevState, loading: false }));
    }
  };

  const bringLocations = async (id: string) => {
    setLocations({ loading: true, error: null, data: {} as Locations[] });
    try {
      const data = await api.locations(id);

      updateLocations(data as Locations[]);
      setLocations((prevState) => ({ ...prevState, data: data }));
    } catch (err) {
      setLocations((prevState) => ({
        ...prevState,
        error: (err as Error).message,
      }));
    } finally {
      setLocations((prevState) => ({ ...prevState, loading: false }));
    }
  };
  const bringAssets = async (id: string) => {
    setAssets({ loading: true, error: null, data: {} as Assets[] });
    try {
      const response = await api.assets(id);
      const data = response.map((item, index) => ({
        ...item,
        current: index === 0,
      }));

      updateAssets(data as Assets[]);
      setAssets((prevState) => ({ ...prevState, data: data }));
    } catch (err) {
      setAssets((prevState) => ({
        ...prevState,
        error: (err as Error).message,
      }));
    } finally {
      setAssets((prevState) => ({ ...prevState, loading: false }));
    }
  };
  return {
    bringCompanies,
    bringAssets,
    bringLocations,
  };
};

export default useApi;
