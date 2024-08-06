// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const NavbarContainer = styled.div`
  height: 60px;
  background-color: #1a1a1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #ffffff;
 
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  padding: 5px 10px;
  border-radius: 5px;
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  outline: none;
  color: #ffffff;
  margin-left: 10px;
`;

const Navbar = () => (
  <NavbarContainer>
    <div>Logo</div>
    <SearchBox>
      <FaSearch />
      <SearchInput type="text" placeholder="Search" />
    </SearchBox>
    <div>Profile</div>
  </NavbarContainer>
);

export default Navbar;
