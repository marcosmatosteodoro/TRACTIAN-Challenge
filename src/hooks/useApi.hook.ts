'use client';

import { Assets, Company, CompanyState, Locations, TreeNode } from '@/domain';
import Api from '@/services/Api.service';
import { useState } from 'react';

type Response<T> = {
  loading: boolean;
  error: string | null;
  data: T;
};

interface UseApiReturnType {
  bringCompanies: () => Promise<void>;
  bringAssets: (id: string) => Promise<void>;
  changeCurrentCompany: (id: string) => void;
  changeCurrentAsset: (id: string) => void;
  getTreeNode: (id: string) => Promise<void>;

  treeNode: Response<TreeNode[]>;
  companies: Response<CompanyState[]>;
  assets: Response<Assets[]>;
  currentCompany: Company;
  currentAsset: Assets;
}

const useApi = (): UseApiReturnType => {
  const api = new Api();

  const [currentCompany, setCurrentCompany] = useState<Company>({} as Company);

  const [currentAsset, setCurrentAsset] = useState<Assets>({} as Assets);

  const [companies, setCompanies] = useState<Response<CompanyState[]>>(
    {} as Response<CompanyState[]>,
  );

  const [assets, setAssets] = useState<Response<Assets[]>>(
    {} as Response<Assets[]>,
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

      setCurrentCompany(data[0] as Company);
      setCompanies((prevState) => ({ ...prevState, data: data }));
    } catch (err) {
      setCompanies((prevState) => ({
        ...prevState,
        error: (err as Error).message,
      }));
    } finally {
      setCompanies((prevState) => ({ ...prevState, loading: false }));
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

      setCurrentAsset(data[0] as Assets);
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

  const changeCurrentCompany = (id: string) => {
    const newCompanies = companies.data.map((company) => {
      if (company.id === id) {
        setCurrentCompany(company as Company);
        return { ...company, current: true };
      }

      return { ...company, current: false };
    });

    setCompanies((prevState) => ({ ...prevState, data: newCompanies }));
  };

  const changeCurrentAsset = (id: string) => {
    if (!assets.data) {
      throw new Error('Assets not found');
    }

    assets?.data.forEach((asset) => {
      if (asset.id === id) {
        setCurrentAsset(asset as Assets);
      }
    });
  };

  const getTreeNode = async (id: string) => {
    setTreeNode({ loading: true, error: null, data: {} as TreeNode[] });

    try {
      const locations = await api.locations(id);
      const assets = await api.assets(id);

      const treeNode = buildTreeNode(locations, assets);

      setTreeNode((prevState) => ({ ...prevState, data: treeNode }));
    } catch (err) {
      setTreeNode((prevState) => ({
        ...prevState,
        error: (err as Error).message,
      }));
    } finally {
      setTreeNode((prevState) => ({ ...prevState, loading: false }));
    }
  };

  const buildTreeNode = (locations: Locations[], assets: Assets[]) => {
    const treeNode: TreeNode[] = [];

    function getLocationsTreeNode(locations: Locations[], parentId: boolean) {
      const response = [] as TreeNode[];

      locations.forEach((location) => {
        if (
          (!parentId && location.parentId) ||
          (parentId && !location.parentId)
        ) {
          return;
        }

        let newChilds = [] as TreeNode[];
        const locationChildrens = locations.filter(
          (child) => child.parentId === location.id,
        );

        if (locationChildrens.length > 0) {
          const locationsTreeNode = getLocationsTreeNode(
            locationChildrens,
            true,
          );
          newChilds = [...newChilds, ...locationsTreeNode];
        }

        const locationAssets = assets.filter(
          (asset) => asset.locationId === location.id,
        );

        if (locationAssets.length > 0) {
          const assetsTreeNode = getAssetsTreeNode(locationAssets, true);
          newChilds = [...newChilds, ...assetsTreeNode];
        }

        const data = buildTreeNode({
          location,
          asset: null,
          childrens: newChilds,
        });

        response.push(data);

        if (parentId === false) {
          treeNode.push(data);
        }
      });

      return response;
    }

    function getAssetsTreeNode(locationAssets: Assets[], parentId: boolean) {
      const response = [] as TreeNode[];

      locationAssets.forEach((asset) => {
        if (
          (!parentId && (asset.parentId || asset.locationId)) ||
          (parentId && !asset.parentId && !asset.locationId)
        ) {
          return;
        }

        let newChilds = [] as TreeNode[];

        const assetsChildrens = assets.filter(
          (child) => child.parentId === asset.id,
        );

        if (assetsChildrens.length > 0) {
          const assetsTreeNode = getAssetsTreeNode(assetsChildrens, true);
          newChilds = [...newChilds, ...assetsTreeNode];
        }

        const data = buildTreeNode({
          location: null,
          asset,
          childrens: newChilds,
        });

        if (parentId === false) {
          treeNode.push(data);
        }

        response.push(data);
      });

      return response;
    }

    function buildTreeNode({
      location,
      asset,
      childrens,
    }: Omit<TreeNode, 'hidden' | 'startOpen'>) {
      return {
        location: location,
        asset: asset,
        childrens: childrens,
        startOpen: false,
        hidden: false,
      };
    }

    getLocationsTreeNode(locations, false);
    getAssetsTreeNode(assets, false);

    return treeNode;
  };

  return {
    bringCompanies,
    bringAssets,
    changeCurrentCompany,
    changeCurrentAsset,
    getTreeNode,
    treeNode,
    companies,
    assets,
    currentCompany,
    currentAsset,
  };
};

export default useApi;
