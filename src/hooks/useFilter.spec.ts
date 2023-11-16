import { renderHook, act } from '@testing-library/react';
import useFilter from './useFilter';
import MockRouterWrapper from '../utils/mocks/MockRouterWrapper';

describe('#useFilter', () => {
  it('should update filter with values', async () => {
    const { result } = renderHook(() => useFilter(), {
      wrapper: MockRouterWrapper,
    });

    await act(() => {
      result.current.changeFilter('Berlin', 'location');
    });

    await act(() => {
      result.current.changeFilter(1, 'page');
    });
    await act(() => {
      result.current.changeFilter(10, 'per_page');
    });
    await act(() => {
      result.current.changeFilter('proximity', 'stolenness');
    });

    expect(result.current.filter).toEqual({
      location: 'Berlin',
      page: 1,
      per_page: 10,
      stolenness: 'proximity',
    });
  });

  it('should update filter with values adn remove empty values', async () => {
    const { result } = renderHook(() => useFilter(), {
      wrapper: MockRouterWrapper,
    });

    await act(() => {
      result.current.changeFilter('Berlin', 'location');
    });

    await act(() => {
      result.current.changeFilter(1, 'page');
    });
    await act(() => {
      result.current.changeFilter(10, 'per_page');
    });
    await act(() => {
      result.current.changeFilter('proximity', 'stolenness');
    });
    await act(() => {
      result.current.changeFilter('', 'location');
    });

    expect(result.current.filter).toEqual({
      page: 1,
      per_page: 10,
      stolenness: 'proximity',
    });
  });

  it('should update add only one filter', async () => {
    const { result } = renderHook(() => useFilter(), {
      wrapper: MockRouterWrapper,
    });

    await act(() => {
      result.current.changeFilter('munich', 'location');
    });

    expect(result.current.filter).toEqual(
      expect.objectContaining({
        location: 'munich',
      }),
    );
  });
});
