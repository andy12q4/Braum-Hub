import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Homepage from './components/Homepage';
import ProjectsPage from './components/ProjectsPage';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
  overflow: auto;
  min-height: 0;
`;

const App = () => {
  return (
    <Router>
     <AppContainer>
      <Header />
      <MainContent>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      </MainContent>
      <Footer />
     </AppContainer>
    </Router>
  );
};

export default App;
