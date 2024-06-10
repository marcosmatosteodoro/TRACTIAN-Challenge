import { SensorType, Status } from '.';

export type Asset = {
  id: string;
  name: string;
  locationId: string | null;
  parentId: string | null;
  sensorType: SensorType;
  status: Status;
  gatewayId?: string;
  sensorId?: string;
};
