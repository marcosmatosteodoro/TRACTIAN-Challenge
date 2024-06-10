import { faker } from '@faker-js/faker';
import { Asset, Location, Response, TreeNodeFinder } from '../models';
import { mockAsset } from './assetsMock';
import { mockLocation } from './locationMock';
import { mockTreeNodeFinder } from './treeNodeFinderMock';

export function mockResponse<T>(dataGenerator: () => T): Response<T> {
  return {
    loading: faker.datatype.boolean(),
    error: faker.datatype.boolean() ? faker.lorem.sentence() : null,
    data: dataGenerator(),
  };
}

export function mockAssetResponse(): Response<Asset> {
  return mockResponse(mockAsset);
}

export function mockLocationResponse(): Response<Location> {
  return mockResponse(mockLocation);
}

export function mockTreeNodeFinderResponse(
  dataCount: number,
  depth: number = 2,
): Response<TreeNodeFinder> {
  return mockResponse(() => mockTreeNodeFinder(dataCount, depth));
}
