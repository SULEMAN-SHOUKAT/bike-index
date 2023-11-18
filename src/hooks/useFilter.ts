import { useState } from 'react';

export type IFilter = {
  location: string;
  page: number;
  per_page: number;
  stolenness: string;
  serial?: string;
  query?: string;
};

const useFilter = (initialFilters: IFilter) => {
  const [filter, setFilter] = useState<IFilter>(initialFilters);

  const changeFilter = (value: string | number, key: keyof IFilter) => {
    let newFilter = { ...filter };
    if (!value && filter && key in filter) {
      delete newFilter[key];
    } else {
      newFilter = { ...newFilter, [key]: value };
    }
    setFilter(newFilter);
  };

  return {
    filter,
    changeFilter,
  };
};

export default useFilter;
