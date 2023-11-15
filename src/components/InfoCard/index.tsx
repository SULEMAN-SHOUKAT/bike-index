import React from 'react';
import styled from 'styled-components';

type InfoCardProps = {
  title: string;
  type: 'info' | 'error';
};
const InfoCard: React.FC<InfoCardProps> = ({ title, type }) => {
  return (
    <NoRecordContainer>
      <ContentContainer>
        <EmptySkelton />
        <Title type={type}>{title}</Title>
      </ContentContainer>
    </NoRecordContainer>
  );
};

const NoRecordContainer = styled.div`
  width: 100%;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 50%;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const EmptySkelton = styled.div`
  background: linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%);
  background-size: 1000px 100%;
  border-radius: 4px;
  width: 100%;
  height: 4rem;
  margin-bottom: 10px;
`;

const Title = styled.div<{ type: 'error' | 'info' }>`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.type === 'error' ? 'red' : 'black')};
`;
export default InfoCard;
