import { faker } from '@faker-js/faker';
import { TreeNodeFilters } from '../models';

export function mockTreeNodeFilters(): TreeNodeFilters {
  return {
    thunderbolt: faker.datatype.boolean(),
    alert: faker.datatype.boolean(),
    search: faker.lorem.word(),
  };
}
