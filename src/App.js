import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Gallery from './pages/Gallery';
import WeekendPlans from './pages/WeekendPlans';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Wrapper component to access location
const PageWrapper = ({ Component, celebrationMessage }) => {
  const location = useLocation();
  
  return <Component location={location} celebrationMessage={celebrationMessage} />;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PageWrapper Component={Home} celebrationMessage="Wishing you a beautiful and blissful weekend, my love. May every moment be filled with joy, warmth, and thoughts of us." />} />
          <Route path="/our-story" element={<PageWrapper Component={OurStory} celebrationMessage="Our Love Story Begins Here, Diane!" />} />
          <Route path="/gallery" element={<PageWrapper Component={Gallery} celebrationMessage="Here’s to creating beautiful memories together, my dearest Diane — every moment with you is a treasure in my heart!" />} />
          <Route path="/weekend-plans" element={<PageWrapper Component={WeekendPlans} celebrationMessage="Exciting Plans Await Us, Diane!" />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
