import { renderHook, waitFor } from '@testing-library/react';

import TestQueryWrapper from '../utils/mocks/MockQueryWrapper';
import {
  mockedBike,
  mockedBikeWithNull,
  mockedCount,
  mockedFilter,
} from '../utils/mocks/mockedData';
import useBikeIndex from './useBikeIndex';
import bikeIndexService from '../services/bike-index';
import axios from 'axios';
import global from '../utils/mocks/global';

jest.mock('../services/bike-index', () => ({
  get: jest.fn(),
}));

jest.mock('axios', () => ({
  get: jest.fn(),
}));

const mockedBikes = [mockedBike, mockedBikeWithNull];
const mockedBikeIndexes = {
  bikes: mockedBikes,
  count: mockedCount[0],
  totalPages: 2,
};

describe('#useBikeIndex', () => {
  beforeAll(() => {
    global.mockGlobalWindowObject();
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  describe('when used', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return isError true in error case', async () => {
      axios.get = jest.fn().mockImplementationOnce(() => {
        throw new Error('mocked error');
      });
      const { result } = renderHook(() => useBikeIndex(mockedFilter), {
        wrapper: TestQueryWrapper,
      });
      await waitFor(() => !result.current.isLoading);
      expect(result.current.data).toEqual(undefined);
      expect(result.current.isError).toBe(true);
    });

    it('should return the initial values for data, error and loading when initialized', async () => {
      bikeIndexService.get = jest
        .fn()
        .mockImplementationOnce(() => mockedBikeIndexes);

      const { result } = renderHook(() => useBikeIndex(mockedFilter), {
        wrapper: TestQueryWrapper,
      });
      expect(result.current.data).toEqual(undefined);
      expect(result.current.isLoading).toBe(true);
      expect(result.current.isError).toBe(false);
    });

    it('should return the data as bikeIndexes and isLoading and isError false in success case', async () => {
      bikeIndexService.get = jest
        .fn()
        .mockImplementationOnce(() => mockedBikeIndexes);

      const { result } = renderHook(() => useBikeIndex(mockedFilter), {
        wrapper: TestQueryWrapper,
      });
      await waitFor(() => !result.current.isLoading);
      expect(result.current.data).toEqual(mockedBikeIndexes);
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isError).toBe(false);
    });
  });
});
