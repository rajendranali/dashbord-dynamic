import React from 'react';
import { ThemeProvider } from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import styled from 'styled-components';
import { GlobalStyles, theme } from './styles/Globlastyles';




const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary}; /* Black background for the entire app */
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 80px; /* Adjust margin to match sidebar width */
  padding: ${props => props.theme.spacing.large};
  background-color: ${props => props.theme.colors.primary}; /* Ensure background matches the theme */
  overflow-y: auto; /* Allow scrolling if content overflows */
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <AppContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <Dashboard />
      </MainContent>
    </AppContainer>
  </ThemeProvider>
);

export default App;
