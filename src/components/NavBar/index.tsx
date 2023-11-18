import React from 'react';
import styled from 'styled-components';

import CycleIcon from '../../assets/cycle.svg';

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <TitleContainer>
        <CycleIcon />
        <Title>Bike Index</Title>
      </TitleContainer>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  background: #2e4053;
  padding: 20px 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const TitleContainer = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: white;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: white;
  margin-left: 1rem;
  margin-top: 10px;
`;
export default NavBar;
