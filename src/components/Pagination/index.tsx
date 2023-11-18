import React from 'react';
import styled from 'styled-components';

import PrimaryButton from '../PrimaryButton';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  count: number;
  onPageChange: (page: number) => void;
};
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  count,
  onPageChange,
}) => {
  const onPrev = () => {
    onPageChange(currentPage - 1);
  };

  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  return (
    <PaginationContainer>
      <PaginationInfo>
        <InfoTitle>total records: </InfoTitle>
        {count}
      </PaginationInfo>
      <ButtonsContainer>
        <PrimaryButton
          disabled={currentPage <= 1}
          onClick={onPrev}
          title='Prev'
        />

        <PaginationInfo>
          page <InfoTitle>{currentPage}</InfoTitle> of{' '}
          <InfoTitle>{totalPages}</InfoTitle>
        </PaginationInfo>
        <PrimaryButton
          disabled={currentPage >= totalPages}
          onClick={onNext}
          title='Next'
        />
      </ButtonsContainer>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  @media (max-width: 425px) {
    margin-top: 1rem;
  }
`;

const PaginationInfo = styled.div`
  font-size: 16px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
`;

const InfoTitle = styled.span`
  font-weight: bold;
`;
export default Pagination;
