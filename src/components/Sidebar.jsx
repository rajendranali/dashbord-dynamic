import React from 'react';
import styled from 'styled-components';
import { FaHome, FaChartPie, FaShoppingCart, FaUsers, FaCog } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 80px;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary || '#333'};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  position: fixed; /* Keep it fixed on the left */
  top: 0;
  left: 0;
  z-index: 1000; /* Ensure it appears above other content */
`;

const IconWrapper = styled.div`
  margin-bottom: 30px;
  color: ${props => props.theme.colors.text || '#fff'};
  cursor: pointer;
  font-size: 24px; /* Larger icons */
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.active || '#f39c12'};
  }
`;

const Sidebar = () => (
  <SidebarContainer>
    <IconWrapper>
      <FaHome />
    </IconWrapper>
    <IconWrapper>
      <FaChartPie />
    </IconWrapper>
    <IconWrapper>
      <FaShoppingCart />
    </IconWrapper>
    <IconWrapper>
      <FaUsers />
    </IconWrapper>
    <IconWrapper>
      <FaCog />
    </IconWrapper>
  </SidebarContainer>
);

export default Sidebar;
