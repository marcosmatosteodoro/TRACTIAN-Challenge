import { faker } from '@faker-js/faker';
import { Locations } from '../models';

export function mockLocation(): Locations {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    parentId: faker.datatype.boolean() ? faker.string.uuid() : null,
  };
}

export const mockLocations = (count: number): Locations[] => {
  return Array.from({ length: count }, mockLocation);
};
