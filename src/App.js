import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { GlobalStateProvider } from './state/GlobalState';

// Placeholder components for pages
// These will be replaced with actual page components as they are developed
const HomePage = () => <Box>Home Page</Box>;
const AboutPage = () => <Box>About Us (Nosotros)</Box>;
const AdmissionsPage = () => <Box>Admissions (Admisiones)</Box>;
const ServicesPage = () => <Box>Services (Servicios)</Box>;
const NewsPage = () => <Box>News (Noticias)</Box>;
const ContactPage = () => <Box>Contact (Contacto)</Box>;

function App() {
  return (
    // GlobalStateProvider manages global state for theme and language
    // This allows for easy theme switching and internationalization across the entire app
    <GlobalStateProvider>
      {/* ChakraProvider enables Chakra UI theming and components */}
      <ChakraProvider>
        {/* Router enables client-side routing for a smooth, SPA-like experience */}
        <Router>
          <Box className="App">
            {/* Header component is rendered on all pages for consistent navigation */}
            <Header />
            <Box as="main">
              {/* Routes define the routing structure of the application */}
              {/* This declarative routing approach makes it easy to add or modify routes */}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/nosotros" element={<AboutPage />} />
                <Route path="/admisiones" element={<AdmissionsPage />} />
                <Route path="/servicios" element={<ServicesPage />} />
                <Route path="/noticias" element={<NewsPage />} />
                <Route path="/contacto" element={<ContactPage />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </ChakraProvider>
    </GlobalStateProvider>
  );
}

export default App;
