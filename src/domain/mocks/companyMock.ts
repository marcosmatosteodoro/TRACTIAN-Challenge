import { faker } from '@faker-js/faker';
import { Company } from '../models';

export function mockCompany(): Company {
  return {
    id: faker.string.uuid(),
    name: faker.company.name(),
  };
}

export const mockCompanies = (count: number): Company[] => {
  return Array.from({ length: count }, mockCompany);
};
