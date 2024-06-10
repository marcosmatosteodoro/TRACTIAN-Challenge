import { Asset } from './asset';
import { Location } from './location';

export type TreeNode = {
  location: Location | null;
  asset: Asset | null;
  childrens: TreeNode[];
  startOpen: boolean;
  hidden: boolean;
};

export type TreeNodeFinder = {
  data: TreeNode[];
  active: boolean;
};

export type TreeNodeFilters = {
  thunderbolt: boolean;
  alert: boolean;
  search: string;
};
