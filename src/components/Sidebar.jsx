// src/components/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { FaHome, FaChartBar, FaUsers, FaEnvelope } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const IconWrapper = styled.div`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 20px;
`;

const Sidebar = () => (
  <SidebarContainer>
    <IconWrapper><FaHome /></IconWrapper>
    <IconWrapper><FaChartBar /></IconWrapper>
    <IconWrapper><FaUsers /></IconWrapper>
    <IconWrapper><FaEnvelope /></IconWrapper>
  </SidebarContainer>
);

export default Sidebar;
