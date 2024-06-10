import { Assets, Company, Locations } from '@/domain/models';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Api from '../../services/Api.service';

describe('Api', () => {
  let mock: MockAdapter;
  let api: Api;

  beforeAll(() => {
    mock = new MockAdapter(axios);
    api = new Api();
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  it('should fetch companies', async () => {
    const companiesData: Company[] = [
      { id: '1', name: 'Company 1' },
      { id: '2', name: 'Company 2' },
    ];

    mock
      .onGet('https://fake-api.tractian.com/news/companies')
      .reply(200, companiesData);

    const companies = await api.companies();

    expect(companies).toEqual(companiesData);
  });

  it('should fetch locations', async () => {
    const locationsData: Locations[] = [
      { id: '1', name: 'Location 1', parentId: null },
      { id: '2', name: 'Location 2', parentId: '1' },
    ];

    mock
      .onGet('https://fake-api.tractian.com/companies/1/locations')
      .reply(200, locationsData);

    const locations = await api.locations('1');

    expect(locations).toEqual(locationsData);
  });

  it('should fetch assets', async () => {
    const assetsData: Assets[] = [
      {
        id: '1',
        name: 'Asset 1',
        locationId: '1',
        parentId: null,
        sensorType: 'energy',
        status: 'operating',
      },
      {
        id: '2',
        name: 'Asset 2',
        locationId: '1',
        parentId: '1',
        sensorType: 'vibration',
        status: 'alert',
      },
    ];

    mock
      .onGet('https://fake-api.tractian.com/companies/1/assets')
      .reply(200, assetsData);

    const assets = await api.assets('1');

    expect(assets).toEqual(assetsData);
  });

  it('should handle GET request failure', async () => {
    mock.onGet('https://fake-api.tractian.com/news/companies').reply(500);

    await expect(api.companies()).rejects.toThrow(
      'GET request to /news/companies failed',
    );
  });
});
