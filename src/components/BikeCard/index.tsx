import React from 'react';

import styled from 'styled-components';
import { type Bike } from '../../services/bike-index';

import ImageIcon from '../../assets/image.svg';

type BikeProps = {
  bike: Bike;
};
const BikeCard: React.FC<BikeProps> = ({ bike }) => {
  return (
    <BikeCardContainer data-testid='bike-card'>
      <ImageContainer>
        {bike.thumb ? (
          <Image data-testid='bike-thumb' src={bike.thumb} alt={bike.title} />
        ) : (
          <ImageAlt data-testid='bike-image-placeholder'>
            <ImageIcon />
          </ImageAlt>
        )}
      </ImageContainer>
      <ContentContainer>
        <Title data-testid='bike-title'>{bike.title}</Title>
        <TextContent data-testid='bike-serial'>
          <TextTitle>Serial: </TextTitle>
          {bike.serial}
        </TextContent>
        <TextContent data-testid='bike-description'>
          <TextTitle>Description: </TextTitle>
          {bike.description}
        </TextContent>
        <TextContent data-testid='bike-stolen-date'>
          <TextTitle>Stolen At: </TextTitle>
          {new Date(bike.date_stolen).toLocaleString('DE')}
        </TextContent>
        <TextContent data-testid='bike-frame-model'>
          <TextTitle>Frame Model: </TextTitle>
          {bike.frame_model}
        </TextContent>
      </ContentContainer>
      <ContentContainer>
        <TextContent data-testid='bike-location'>
          <TextTitle>Location: </TextTitle>
          {bike.stolen_location}
        </TextContent>
      </ContentContainer>
    </BikeCardContainer>
  );
};

const BikeCardContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  margin-bottom: 10px;
  min-height: 200px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
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
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  @media (max-width: 768px) {
    min-width: 100%;
    height: 400px;
  }
`;

const ImageAlt = styled.div`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  align-items: center;
  justify-content: center;
  display: flex;
  background: linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%);
  background-size: 1000px 100%;
  @media (max-width: 768px) {
    min-width: 100%;
    height: 400px;
  }
`;

const ContentContainer = styled.div`
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const TextTitle = styled.span`
  font-weight: bold;
`;
export default BikeCard;
