import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export type IFilter = {
  location: string;
  page: number;
  per_page: number;
  stolenness: string;
  serial?: string;
  query?: string;
};

const DEFAULT_FILTERS = {
  location: 'Munich',
  page: 1,
  per_page: 10,
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
  let mappedFilter = {};
  searchParams.forEach((value, key) => {
    const isNumber = /^-?\d+$/.test(value);
    mappedFilter = {
      ...mappedFilter,
      [key]: isNumber ? parseInt(value, 10) : value,
    };
  });
  return mappedFilter;
};

const isEmptyFilter = (obj: IFilter) => !Object.keys(obj).length;

const useFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<IFilter>(
    mapParamsToFilter(searchParams) as IFilter,
  );

  const changeFilter = (value: string | number, key: string) => {
    let newFilter = { ...filter };
    if (!value && filter && key in filter) {
      delete newFilter[key as keyof IFilter];
    } else {
      newFilter = { ...newFilter, [key]: value };
    }
    setFilter(newFilter);
    setSearchParams(mapFilterToParams(newFilter));
  };

  useEffect(() => {
    const params = mapFilterToParams(
      isEmptyFilter(filter) ? DEFAULT_FILTERS : filter,
    );
    setSearchParams(params);
  }, []);

  return {
    filter,
    changeFilter,
  };
};

export default useFilter;
