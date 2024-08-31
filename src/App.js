// Branch: enhance-website-update

import React, { lazy, Suspense } from 'react';
import { ChakraProvider, Box, Spinner } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { GlobalStateProvider } from './state/GlobalState';

// Lazy load page components
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Loading fallback component
const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    <Spinner size="xl" />
  </Box>
);

function App() {
  return (
    <GlobalStateProvider>
      <ChakraProvider>
        <Router>
          <Box className="App">
            <Header />
            <Box as="main">
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/nosotros" element={<AboutPage />} />
                  <Route path="/admisiones" element={<AdmissionsPage />} />
                  <Route path="/servicios" element={<ServicesPage />} />
                  <Route path="/noticias" element={<NewsPage />} />
                  <Route path="/contacto" element={<ContactPage />} />
                </Routes>
              </Suspense>
            </Box>
          </Box>
        </Router>
      </ChakraProvider>
    </GlobalStateProvider>
  );
}

export default App;
