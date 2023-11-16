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

jest.mock('../services/bike-index');

const mockedBikes = [mockedBike, mockedBikeWithNull];
const mockedBikeIndexes = {
  bikes: mockedBikes,
  count: mockedCount[0],
  totalPages: 2,
};

describe('#useBikeIndex', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  describe('when there is no error', () => {
    beforeAll(() => {
      bikeIndexService.get = jest
        .fn()
        .mockImplementationOnce(() => mockedBikeIndexes);
    });
    afterAll(() => {
      jest.clearAllMocks();
    });
    it('should return the initial values for data, error and loading', async () => {
      const { result } = renderHook(() => useBikeIndex(mockedFilter), {
        wrapper: TestQueryWrapper,
      });
      expect(result.current.data).toEqual(undefined);
      expect(result.current.isLoading).toBe(true);
      expect(result.current.isError).toBe(false);
    });

    it('should return the data as bikeIndexes and isLoading and isError false', async () => {
      const { result } = renderHook(() => useBikeIndex(mockedFilter), {
        wrapper: TestQueryWrapper,
      });
      await waitFor(() => result.current.data);
      expect(result.current.data).toEqual(mockedBikeIndexes);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isError).toBe(false);
    });
  });
});
