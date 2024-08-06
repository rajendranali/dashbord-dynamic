// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;
// src/theme.js

export const theme = {
  colors: {
    primary: '#1A1A2E',           // Background color for the screen
    secondary: '#252836',         // Slightly lighter dark color for secondary backgrounds
    text: '#E0E0E0',              // Light gray text color
    active: '#5F63F2',            // Blue color for active states
    cardBackground: '#1F1D2B',    // Background color for cards
    activeCardBackground: '#2C2F48', // Slightly lighter shade for active cards
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
  },
  borderRadius: '8px',
  fontSizes: {
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '24px',
  },
};
