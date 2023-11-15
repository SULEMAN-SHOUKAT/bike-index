import React from 'react';

import styled, { keyframes } from 'styled-components';

const LoadingSkeleton: React.FC = () => {
  return (
    <SkeletonContainer>
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
    </SkeletonContainer>
  );
};

const shimmer = keyframes`
  0% {
    background-position: -300px 0;
  }
  100% {
    background-position: 300px 0;
  }
`;

const SkeletonContainer = styled.div`
  width: 100%;
`;
const SkeletonLoader = styled.div`
  background: linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%);
  background-size: 1000px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
  width: 100%;
  height: 4rem;
  margin-bottom: 10px;
`;

export default LoadingSkeleton;
