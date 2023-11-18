import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IFilter } from './useFilter';

const DEFAULT_PARAMS = {
  location: 'Munich',
  page: '1',
  per_page: '10',
  stolenness: 'proximity',
};

const mapFilterToParams = (filter: IFilter) => {
  let mappedFilter = {};
  for (const key in filter) {
    mappedFilter = { ...mappedFilter, [key]: filter[key as keyof IFilter] };
  }
  return mappedFilter;
};

const mapParamsToFilter = (searchParams: URLSearchParams) => {
  let mappedFilter = {} as IFilter;
  searchParams.forEach((value, key) => {
    const isNumber = /^-?\d+$/.test(value);
    mappedFilter = {
      ...mappedFilter,
      [key]: isNumber ? parseInt(value, 10) : value,
    };
  });
  return mappedFilter;
};

const useParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (filter: IFilter) =>
    setSearchParams(mapFilterToParams(filter));

  useEffect(() => {
    if (!searchParams.size) {
      setSearchParams(DEFAULT_PARAMS);
    }
  }, [searchParams, setSearchParams]);

  const getParamsAsFilter = () => mapParamsToFilter(searchParams);

  return {
    params: getParamsAsFilter(),
    updateSearchParams,
  };
};

export default useParams;
