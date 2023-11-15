import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import useBikeIndex from '../../hooks/useBikeIndex';
import useFilter from '../../hooks/useFilter';
import Bikes from './Bikes';
import Filter from './Filter';

const Browse: React.FC = () => {
  const { filter, changeFilter } = useFilter();
  const {
    data: bikeIndexes,
    isLoading,
    isError,
    isRefetching,
    refetch,
  } = useBikeIndex(filter);

  const handlePageChange = (page: number) => {
    changeFilter(page, 'page');
    refetch();
  };

  return (
    <div>
      <Header />
      <BrowseContentContainer>
        <Filter
          filter={filter}
          onChangeFilter={changeFilter}
          onFilter={refetch}
        />
        <Bikes
          bikeIndexes={bikeIndexes}
          isLoading={isLoading}
          isRefetching={isRefetching}
          currentPage={filter.page}
          isError={isError}
          onPageChange={handlePageChange}
        />
      </BrowseContentContainer>
    </div>
  );
};

const BrowseContentContainer = styled.div`
  margin: 1rem 5rem;
  @media (max-width: 768px) {
    margin: 10px;
  }
`;
export default Browse;
