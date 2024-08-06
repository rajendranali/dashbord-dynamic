// src/components/Header.js

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 60px;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 0 ${props => props.theme.spacing.large};
  justify-content: space-between;
`;

const SearchInput = styled.input`
  background-color: ${props => props.theme.colors.secondary};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing.small};
  color: ${props => props.theme.colors.text};
  width: 200px;
  margin-left: ${props => props.theme.spacing.large};

  &::placeholder {
    color: #b0b0b0;
  }
`;

const Header = () => (
  <HeaderContainer>
    <div>
      <SearchInput placeholder="Search..." />
    </div>
    <div>
      <i className="fas fa-bell"></i>
      <i className="fas fa-envelope" style={{ marginLeft: '200px' }}></i>
      <img src="path/to/avatar.jpg" alt="User Avatar" style={{ width: '40px', borderRadius: '50%', marginLeft: '20px' }} />
    </div>
  </HeaderContainer>
);

export default Header;
