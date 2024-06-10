'use client';

import {
  Assets,
  Company,
  CompanyState,
  Locations,
  TreeNode,
} from '@/domain/models';
import React, { createContext, useContext, useState } from 'react';

export type AplicationContextType = {
  updateCompanies: (data: CompanyState[]) => void;
  updateAssets: (data: Assets[]) => void;
  updateLocations: (data: Locations[]) => void;
  updateCurrentCompany: (id: string) => void;
  updateCurrentAsset: (id: string) => void;
  updateTreeNode: (data: TreeNode[]) => void;
  treeNode: TreeNode[];
  companies: CompanyState[];
  assets: Assets[];
  locations: Locations[];
  currentCompany: Company;
  currentAsset: Assets;
};

const AplicationContext = createContext<AplicationContextType | undefined>(
  undefined,
);

export const AplicationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentCompany, setCurrentCompany] = useState<Company>({} as Company);
  const [currentAsset, setCurrentAsset] = useState<Assets>({} as Assets);
  const [companies, setCompanies] = useState<CompanyState[]>(
    [] as CompanyState[],
  );
  const [assets, setAssets] = useState<Assets[]>([] as Assets[]);
  const [locations, setLocations] = useState<Locations[]>([] as Locations[]);
  const [treeNode, setTreeNode] = useState<TreeNode[]>([] as TreeNode[]);

  const updateCompanies = (data: CompanyState[]) => {
    setCompanies(data);

    if (!currentCompany?.id && data.length > 0) {
      setCurrentCompany(data[0]);
    }
  };

  const updateAssets = (data: Assets[]) => {
    setAssets(data);
  };

  const updateLocations = (data: Locations[]) => {
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

    setCurrentAsset(data as Assets);
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
