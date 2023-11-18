import React from 'react';
import styled from 'styled-components';

type InfoCardProps = {
  title: string;
  type: 'info' | 'error';
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};
const InfoCard: React.FC<InfoCardProps> = ({ title, type, Icon }) => {
  return (
    <InfoCardContainer>
      {Icon && <Icon />}
      <Title type={type} data-testid={`info-card-${type}`}>
        {title}
      </Title>
    </InfoCardContainer>
  );
};

const InfoCardContainer = styled.div`
  width: 100%;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div<{ type: 'error' | 'info' }>`
  font-size: 20px;
  font-weight: bold;
  margin-top: 1rem;
  color: ${(props) => (props.type === 'error' ? '#ea0606' : 'black')};
`;
export default InfoCard;
