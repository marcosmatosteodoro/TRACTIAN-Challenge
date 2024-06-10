import { Asset, Company, Location } from '@/domain/models';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

class Api {
  private client: AxiosInstance;
  private endpoins: {
    companies: () => string;
    locations: (id: string) => string;
    assets: (id: string) => string;
  };

  constructor() {
    const baseURL = 'https://fake-api.tractian.com/';
    this.client = axios.create({ baseURL });
    this.endpoins = {
      companies: () => '/companies',
      locations: (id) => `/companies/${id}/locations`,
      assets: (id) => `/companies/${id}/assets`,
    };
  }

  private async GET<T>(endpoint: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.client.get(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(`GET request to ${endpoint} failed: ${error}`);
    }
  }

  public async companies(): Promise<Company[]> {
    return await this.GET<Company[]>(this.endpoins.companies());
  }

  public async locations(id: string): Promise<Location[]> {
    return await this.GET<Location[]>(this.endpoins.locations(id));
  }

  public async assets(id: string): Promise<Asset[]> {
    return await this.GET<Asset[]>(this.endpoins.assets(id));
  }
}

export default Api;
