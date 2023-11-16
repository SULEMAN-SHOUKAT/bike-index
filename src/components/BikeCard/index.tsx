import React from 'react';

import styled from 'styled-components';
import { type Bike } from '../../services/bike-index';

type BikeProps = {
  bike: Bike;
};
const BikeCard: React.FC<BikeProps> = ({ bike }) => {
  return (
    <BikeCardContainer data-testid='bike-card'>
      <CardImageContainer>
        {bike.thumb ? (
          <Image data-testid='bike-thumb' src={bike.thumb} alt={bike.title} />
        ) : (
          <ImageAlt data-testid='bike-image-placeholder' />
        )}
      </CardImageContainer>
      <CardContentContainer>
        <Title data-testid='bike-title'>{bike.title}</Title>
        <TextContent data-testid='bike-serial'>
          <ContentTitle>Serial: </ContentTitle>
          {bike.serial}
        </TextContent>
        <TextContent data-testid='bike-description'>
          <ContentTitle>Description: </ContentTitle>
          {bike.description}
        </TextContent>
        <TextContent data-testid='bike-stolen-date'>
          <ContentTitle>Stolen At: </ContentTitle>
          {new Date(bike.date_stolen).toLocaleString('DE')}
        </TextContent>
        <TextContent data-testid='bike-frame-model'>
          <ContentTitle>Frame Model: </ContentTitle>
          {bike.frame_model}
        </TextContent>
      </CardContentContainer>
      <CardContentContainer>
        <TextContent data-testid='bike-location'>
          <ContentTitle>Location: </ContentTitle>
          {bike.stolen_location}
        </TextContent>
      </CardContentContainer>
    </BikeCardContainer>
  );
};

const BikeCardContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: white;
  display: flex;
  margin-bottom: 10px;
  min-height: 200px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardImageContainer = styled.div`
  min-width: 200px;
  max-height: 200px;
  @media (max-width: 768px) {
    min-width: 100%;
    min-height: 400px;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 4px;
  @media (max-width: 768px) {
    min-width: 100%;
    height: 400px;
  }
`;

const ImageAlt = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%);
  background-size: 1000px 100%;
  border-radius: 4px;
  @media (max-width: 768px) {
    min-width: 100%;
    height: 400px;
  }
`;

const CardContentContainer = styled.div`
  width: 40%;
  margin-left: 2rem;
  padding: 10px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 4px;
  }
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #3498db;
`;

const TextContent = styled.p`
  font-size: 16px;
  line-height: 1rem;
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit number of displayed lines */
  -webkit-box-orient: vertical; /* Set vertical layout */
`;

const ContentTitle = styled.span`
  font-weight: bold;
`;
export default BikeCard;
