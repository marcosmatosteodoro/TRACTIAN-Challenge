'use client';

import { AplicationContextType } from '@/context/AplicationContext';
import { Assets, Locations, TreeNode } from '@/domain';

interface UseTreeNodeReturnType {
  getTreeNode: () => void;
}

type useTreeNodeProps = {
  application: AplicationContextType;
};
const useTreeNode = ({
  application,
}: useTreeNodeProps): UseTreeNodeReturnType => {
  const { treeNode, locations, assets, updateTreeNode } = application;

  const getTreeNode = () => {
    updateTreeNode({} as TreeNode[]);

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
    getTreeNode,
  };
};

export default useTreeNode;
