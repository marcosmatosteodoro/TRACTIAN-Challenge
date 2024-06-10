import { faker } from '@faker-js/faker';
import { Location } from '../models';

export function mockLocation(): Location {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    parentId: faker.datatype.boolean() ? faker.string.uuid() : null,
  };
}

export const mockLocations = (count: number): Location[] => {
  return Array.from({ length: count }, mockLocation);
};
