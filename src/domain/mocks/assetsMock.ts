import { faker } from '@faker-js/faker';
import { Asset, SensorType, Status } from '../models';

const sensorTypes: SensorType[] = ['energy', 'vibration', null];
const statuses: Status[] = ['operating', 'alert', null];

export function mockAsset(): Asset {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    locationId: faker.datatype.boolean() ? faker.string.uuid() : null,
    parentId: faker.datatype.boolean() ? faker.string.uuid() : null,
    sensorType: faker.helpers.arrayElement(sensorTypes),
    status: faker.helpers.arrayElement(statuses),
    gatewayId: faker.datatype.boolean() ? faker.string.uuid() : undefined,
    sensorId: faker.datatype.boolean() ? faker.string.uuid() : undefined,
  };
}

export const mockAssets = (count: number): Asset[] => {
  return Array.from({ length: count }, mockAsset);
};
