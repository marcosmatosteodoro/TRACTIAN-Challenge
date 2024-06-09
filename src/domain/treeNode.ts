import { Assets } from './assets';
import { Locations } from './locations';

export type TreeNode = {
  location: Locations | null;
  asset: Assets | null;
  childrens: TreeNode[];
  startOpen: boolean;
  hidden: boolean;
};
