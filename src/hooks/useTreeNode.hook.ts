'use client';

import { AplicationContextType } from '@/context/AplicationContext';
import {
  Assets,
  Locations,
  TreeNode,
  TreeNodeFilters,
  TreeNodeFinder,
} from '@/domain/models';
import { useState } from 'react';

interface UseTreeNodeReturnType {
  filterByThunderbolt: () => void;
  filterByAlert: () => void;
  filterBySearch: (text: string) => void;
  getTreeNode: () => void;
  filter: TreeNodeFilters;
}

type useTreeNodeProps = {
  application: AplicationContextType;
};

const useTreeNode = ({
  application,
}: useTreeNodeProps): UseTreeNodeReturnType => {
  const [filter, setFilters] = useState<TreeNodeFilters>({
    thunderbolt: false,
    alert: false,
    search: '',
  } as TreeNodeFilters);

  const [searchList, setSearchList] = useState<Assets[]>([] as Assets[]);
  const { treeNode, locations, assets, updateTreeNode } = application;

  const getTreeNode = () => {
    updateTreeNode({} as TreeNode[]);
    setSearchList([] as Assets[]);
    setFilters({
      alert: false,
      thunderbolt: false,
      search: '',
    } as TreeNodeFilters);

    const treeNode = buildTreeNode(locations, assets);
    updateTreeNode(treeNode as TreeNode[]);
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
      const newSearchArray = searchList as Assets[];

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
        } else if (!searchList.find((search) => search.id === asset.id)) {
          newSearchArray.push(asset);
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

      setSearchList(newSearchArray);
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

  const filterByThunderbolt = () => {
    const filters = { ...filter, thunderbolt: !filter.thunderbolt };
    const list = getSearcFilter(filters);

    findAssets({ assets: list, treeNode, update: true });
  };

  const filterByAlert = () => {
    const filters = { ...filter, alert: !filter.alert };
    const list = getSearcFilter(filters);

    findAssets({ assets: list, treeNode, update: true });
  };

  const filterBySearch = (text: string) => {
    const filters = { ...filter, search: text };
    const list = getSearcFilter(filters);

    findAssets({ assets: list, treeNode, update: true });
  };

  const findAssets = ({
    assets,
    treeNode,
    update = false,
  }: {
    assets: Assets[];
    treeNode: TreeNode[];
    update?: boolean;
  }): TreeNodeFinder => {
    let response = false;

    const newTreeNode: TreeNode[] = treeNode.map((node: TreeNode) => {
      if (
        node.asset &&
        assets.find(
          (asset) => asset.id === node.asset?.id && node.childrens.length === 0,
        )
      ) {
        response = true;
        return { ...node, hidden: false, startOpen: true };
      }

      if (node.childrens.length > 0) {
        const { active, data } = findAssets({
          assets,
          treeNode: node.childrens,
          update: false,
        });

        if (active) {
          response = true;
        }

        return { ...node, hidden: !active, startOpen: true, childrens: data };
      }

      return { ...node, hidden: true, startOpen: true };
    });

    if (update && newTreeNode.length > 0) {
      updateTreeNode(newTreeNode);
    }

    return { active: response, data: newTreeNode };
  };

  const getSearcFilter = (filters: TreeNodeFilters) => {
    const { thunderbolt, alert, search } = filters;

    if (!alert && !thunderbolt && search === '') {
      setFilters(filters);
      return searchList;
    }

    const listWithoutSearch = searchList.filter((asset) => {
      const validationAlert = alert && asset?.status === 'alert';
      const validationThunderbolt =
        thunderbolt && asset?.status === 'operating';
      const validationSearch = search && !!search;

      const validationAlertOrThunderbolt =
        validationAlert || validationThunderbolt;

      if (validationSearch) {
        const validationText = asset?.name
          .toLowerCase()
          .includes(search.toLowerCase());
        const validationOnlySearch = !alert && !thunderbolt;

        if (
          validationText &&
          (validationOnlySearch || validationAlertOrThunderbolt)
        ) {
          return true;
        }
      } else {
        if (validationAlertOrThunderbolt) {
          return true;
        }
      }

      return false;
    });

    setFilters(filters);

    return listWithoutSearch;
  };
  return {
    getTreeNode,
    filterByThunderbolt,
    filterByAlert,
    filterBySearch,
    filter,
  };
};

export default useTreeNode;
