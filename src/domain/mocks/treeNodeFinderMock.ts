import { faker } from '@faker-js/faker';
import { TreeNodeFinder } from '../models';
import { mockTreeNodes } from './treeNodeMock';

export function mockTreeNodeFinder(
  dataCount: number,
  depth: number = 2,
): TreeNodeFinder {
  return {
    data: mockTreeNodes(dataCount, depth),
    active: faker.datatype.boolean(),
  };
}
