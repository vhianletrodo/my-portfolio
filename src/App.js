import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import { Container } from '@mui/material @emotion/react @emotion/styled';

function App() {
  return (
    <Container>
      <Header />
      <About />
      <Projects />
    </Container>
  );
}

export default App;