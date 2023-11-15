import React from 'react';

import styled from 'styled-components';

import { type IFilter } from '../../../hooks/useFilter';
import Input from '../../../components/Input';
import PrimaryButton from '../../../components/primaryButton';

type FilterProps = {
  filter: IFilter;
  onChangeFilter: (value: string, key: string) => void;
  onFilter: () => void;
};
const Filter: React.FC<FilterProps> = ({
  filter,
  onChangeFilter,
  onFilter,
}) => {
  return (
    <FiltersContainer>
      <Input
        id='search'
        onChange={(value) => onChangeFilter(value, 'query')}
        title='Search'
        type='text'
        value={filter.query}
      />
      <FiltersRow>
        <FilterInput>
          <Input
            id='location'
            onChange={(value) => onChangeFilter(value, 'location')}
            title='Location'
            type='text'
            value={filter.location}
          />
        </FilterInput>
        <FilterInput>
          <Input
            id='serial'
            onChange={(value) => onChangeFilter(value, 'serial')}
            title='Serial'
            type='text'
            value={filter.serial}
          />
        </FilterInput>
      </FiltersRow>
      <PrimaryButton onClick={onFilter} title='Filter' size='lg' />
    </FiltersContainer>
  );
};

const FiltersContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;
const FiltersRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FilterInput = styled.div`
  width: 48%;
`;
export default Filter;
