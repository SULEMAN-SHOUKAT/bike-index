import { renderHook, act } from '@testing-library/react';
import MockRouterWrapper from '../utils/mocks/MockRouterWrapper';
import { mockedDefaultFilter } from '../utils/mocks/mockedData';

import useParams from './useParams';

describe('#useParams', () => {
  it('should update params with values', async () => {
    const { result } = renderHook(() => useParams(), {
      wrapper: MockRouterWrapper,
    });

    await act(() => {
      result.current.updateSearchParams(mockedDefaultFilter);
    });
    expect(result.current.params).toEqual(mockedDefaultFilter);
  });

  it('should remove the undefined values', async () => {
    const { result } = renderHook(() => useParams(), {
      wrapper: MockRouterWrapper,
    });

    await act(() => {
      result.current.updateSearchParams({
        ...mockedDefaultFilter,
        query: 'search',
      });
    });

    await act(() => {
      result.current.updateSearchParams(mockedDefaultFilter);
    });

    expect(result.current.params).toEqual(mockedDefaultFilter);
  });

  it('should return intial values', async () => {
    const { result } = renderHook(() => useParams(), {
      wrapper: MockRouterWrapper,
    });

    expect(result.current.params).toEqual(mockedDefaultFilter);
  });
});
