'use client';

import {
  Asset,
  Company,
  CompanyState,
  Location,
  TreeNode,
} from '@/domain/models';
import React, { createContext, useContext, useState } from 'react';

export type AplicationContextType = {
  updateCompanies: (data: CompanyState[]) => void;
  updateAssets: (data: Asset[]) => void;
  updateLocations: (data: Location[]) => void;
  updateCurrentCompany: (id: string) => void;
  updateCurrentAsset: (id: string) => void;
  updateTreeNode: (data: TreeNode[]) => void;
  treeNode: TreeNode[];
  companies: CompanyState[];
  assets: Asset[];
  locations: Location[];
  currentCompany: Company;
  currentAsset: Asset;
};

const AplicationContext = createContext<AplicationContextType | undefined>(
  undefined,
);

export const AplicationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentCompany, setCurrentCompany] = useState<Company>({} as Company);
  const [currentAsset, setCurrentAsset] = useState<Asset>({} as Asset);
  const [companies, setCompanies] = useState<CompanyState[]>(
    [] as CompanyState[],
  );
  const [assets, setAssets] = useState<Asset[]>([] as Asset[]);
  const [locations, setLocations] = useState<Location[]>([] as Location[]);
  const [treeNode, setTreeNode] = useState<TreeNode[]>([] as TreeNode[]);

  const updateCompanies = (data: CompanyState[]) => {
    setCompanies(data);

    if (!currentCompany?.id && data.length > 0) {
      setCurrentCompany(data[0]);
    }
  };

  const updateAssets = (data: Asset[]) => {
    setAssets(data);
  };

  const updateLocations = (data: Location[]) => {
    setLocations(data);
  };

  const updateCurrentCompany = (id: string) => {
    const newCompanies = companies?.map((company) => {
      if (company.id === id) {
        setCurrentCompany(company as Company);
        return { ...company, current: true };
      }

      return { ...company, current: false };
    });

    setCompanies(newCompanies);
  };

  const updateCurrentAsset = (id: string) => {
    const data = assets.find((item) => item.id === id);

    if (!data) {
      throw new Error('Asset not found');
    }

    setCurrentAsset(data as Asset);
  };

  const updateTreeNode = (data: TreeNode[]) => {
    setTreeNode(data);
  };

  return (
    <AplicationContext.Provider
      value={{
        treeNode,
        companies,
        assets,
        locations,
        currentCompany,
        currentAsset,
        updateCompanies,
        updateAssets,
        updateLocations,
        updateCurrentCompany,
        updateCurrentAsset,
        updateTreeNode,
      }}
    >
      {children}
    </AplicationContext.Provider>
  );
};

export const useAplicationContext = (): AplicationContextType => {
  const context = useContext(AplicationContext);
  if (!context) {
    throw new Error('useAplication must be used within an AplicationProvider');
  }
  return context;
};
