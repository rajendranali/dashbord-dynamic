// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { GlobalStyles } from './styles/Globlastyles';


function App() {
  return (
    <div style={{ display: 'flex' }}>
      <GlobalStyles />
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
