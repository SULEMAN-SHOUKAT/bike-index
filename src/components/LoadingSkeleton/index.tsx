import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingSkeleton: React.FC = () => {
  return (
    <SkeletonContainer data-testid='loading-skeleton'>
      <Loader />
      <Loader />
      <Loader />
    </SkeletonContainer>
  );
};

const shimmer = keyframes`
 to {
    background-position-x: -200%;
  }
`;

const SkeletonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 13rem;
`;

const Loader = styled.div`
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s ${shimmer} linear infinite;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
`;

export default LoadingSkeleton;
