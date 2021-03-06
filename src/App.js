import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
