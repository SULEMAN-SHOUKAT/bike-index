import React from 'react';
import styled from 'styled-components';
import useBikeIndex from '../../hooks/useBikeIndex';
import useFilter from '../../hooks/useFilter';
import Bikes from './Bikes';
import Filter from './Filter';
import useParams from '../../hooks/useParams';

const Browse: React.FC = () => {
  const { params, updateSearchParams } = useParams();
  const { filter, changeFilter } = useFilter(params);
  const {
    data: bikeIndexes,
    isLoading,
    isError,
    isRefetching,
  } = useBikeIndex(params);

  return (
    <BrowsePageContainer>
      <Filter
        filter={filter}
        onChangeFilter={changeFilter}
        applyFilter={() => updateSearchParams(filter)}
      />
      <Bikes
        bikeIndexes={bikeIndexes}
        isLoading={isLoading}
        isRefetching={isRefetching}
        currentPage={filter.page}
        isError={isError}
        onPageChange={(page: number) => {
          changeFilter(page, 'page');
          updateSearchParams({ ...filter, page });
        }}
      />
    </BrowsePageContainer>
  );
};

const BrowsePageContainer = styled.div`
  margin: 1rem 5rem;
  @media (max-width: 768px) {
    margin: 10px;
  }
`;

export default Browse;
