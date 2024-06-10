import { faker } from '@faker-js/faker';
import { CompanyState } from '../models';

export function mockCompanyState(): CompanyState {
  return {
    id: faker.string.uuid(),
    name: faker.company.name(),
    current: faker.datatype.boolean(),
  };
}

export const mockCompanyStates = (count: number): CompanyState[] => {
  return Array.from({ length: count }, mockCompanyState);
};
