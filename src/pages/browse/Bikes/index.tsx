import React from 'react';

import styled from 'styled-components';
import { BikeIndexes } from '../../../services/bike-index';
import BikeCard from '../../../components/BikeCard';
import InfoCard from '../../../components/InfoCard';
import LoadingSkeleton from '../../../components/LoadingSkeleton';
import Pagination from '../../../components/Pagination';

type BikesProps = {
  bikeIndexes?: BikeIndexes;
  isLoading: boolean;
  isRefetching: boolean;
  isError: boolean;
  currentPage: number;
  onPageChange: (page: number) => void;
};
const Bikes: React.FC<BikesProps> = ({
  bikeIndexes,
  isLoading,
  isRefetching,
  isError,
  currentPage,
  onPageChange,
}) => {
  if (isLoading || isRefetching) return <LoadingSkeleton />;

  if (isError) {
    return (
      <InfoCard
        title='Oops! an unknown error occurs please contact the service'
        type='error'
      />
    );
  }

  if (!bikeIndexes?.bikes?.length)
    return <InfoCard title='No bikes found' type='info' />;

  return (
    <BikesContainer>
      {bikeIndexes && (
        <>
          <Pagination
            totalPages={bikeIndexes.totalPages}
            count={bikeIndexes.count}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
          {bikeIndexes.bikes.map((bike) => (
            <BikeCard bike={bike} key={bike.id} />
          ))}
        </>
      )}
    </BikesContainer>
  );
};

const BikesContainer = styled.div`
  width: 100%;
`;

export default Bikes;
