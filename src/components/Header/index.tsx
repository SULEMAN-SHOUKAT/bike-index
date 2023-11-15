import React from 'react';

import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <NavBarContainer>
      <NavBarTitle>Bike Index</NavBarTitle>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  background: #2e4053;
  padding: 20px 10px;
`;

const NavBarTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: white;
`;

export default Header;
