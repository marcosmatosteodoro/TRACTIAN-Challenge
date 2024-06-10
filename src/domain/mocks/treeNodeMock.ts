import { faker } from '@faker-js/faker';
import { TreeNode } from '../models';
import { mockAsset } from './assetsMock';
import { mockLocation } from './locationMock';

export function mockTreeNode(depth: number = 2): TreeNode {
  const createChildren = (depth: number): TreeNode[] => {
    if (depth === 0) return [];
    return Array.from(
      { length: faker.datatype.number({ min: 0, max: 5 }) },
      () => mockTreeNode(depth - 1),
    );
  };

  return {
    location: faker.datatype.boolean() ? mockLocation() : null,
    asset: faker.datatype.boolean() ? mockAsset() : null,
    childrens: createChildren(depth - 1),
    startOpen: faker.datatype.boolean(),
    hidden: faker.datatype.boolean(),
  };
}

export const mockTreeNodes = (count: number, depth: number = 2): TreeNode[] => {
  return Array.from({ length: count }, () => mockTreeNode(depth));
};
