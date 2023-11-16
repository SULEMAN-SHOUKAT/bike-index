import axios from 'axios';
import bikeIndexApi, { BikeIndexes, Bike } from '.';
import { mockedBike, mockedCount } from '../../utils/mocks/mockedData';
import global from '../../utils/mocks/global';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

const mockFilter = {
  location: 'Munich',
  page: 1,
  per_page: 10,
  stolenness: 'proximity',
};

const mockBikes: Bike[] = [mockedBike];

describe('#bikeIndexService', () => {
  beforeAll(() => {
    global.mockGlobalWindowObject();
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  describe('getCount', () => {
    it('should fetch bike count based on filter', async () => {
      axios.get = jest.fn().mockImplementationOnce(() => ({
        data: { proximity: mockedCount[0] },
      }));
      const count = await bikeIndexApi.getCount(mockFilter);
      expect(count).toBe(mockedCount[0]);
      expect(axios.get).toHaveBeenCalledWith(
        `${window.CONFIG.api.bikeIndex}/search/count`,
        {
          params: mockFilter,
        },
      );
    });
  });

  describe('searchBikes', () => {
    it('should fetch bikes based on filter', async () => {
      const mockResponse = { data: { bikes: mockBikes } };
      axios.get = jest.fn().mockImplementationOnce(() => mockResponse);

      const bikes = await bikeIndexApi.searchBikes(mockFilter);
      expect(bikes).toEqual(mockBikes);
      expect(axios.get).toHaveBeenCalledWith(
        `${window.CONFIG.api.bikeIndex}/search`,
        {
          params: mockFilter,
        },
      );
    });
  });

  describe('get', () => {
    it('should fetch bike indexes based on filter', async () => {
      const mockGetCountResponse = { data: { proximity: mockedCount[0] } };
      const mockSearchBikesResponse = { data: { bikes: mockBikes } };

      axios.get = jest
        .fn()
        .mockImplementationOnce(() => mockSearchBikesResponse)
        .mockImplementationOnce(() => mockGetCountResponse);

      const bikeIndexes: BikeIndexes = await bikeIndexApi.get(mockFilter);

      expect(bikeIndexes.bikes).toEqual(mockBikes);
      expect(bikeIndexes.count).toBe(mockedCount[0]);
      expect(bikeIndexes.totalPages).toBe(
        Math.ceil(mockedCount[0] / mockFilter.per_page),
      );
      expect(axios.get).toHaveBeenNthCalledWith(
        1,
        `${window.CONFIG.api.bikeIndex}/search`,
        {
          params: mockFilter,
        },
      );
      expect(axios.get).toHaveBeenNthCalledWith(
        2,
        `${window.CONFIG.api.bikeIndex}/search/count`,
        {
          params: mockFilter,
        },
      );
    });

    it('should throw an error when an error occurs during fetching', async () => {
      const errorMessage = 'Network Error';
      axios.get = jest
        .fn()
        .mockRejectedValueOnce(() => new Error(errorMessage));

      await expect(bikeIndexApi.get(mockFilter)).rejects.toThrowError(
        'An error occur while getting bikeIndexes',
      );
    });
  });
});
