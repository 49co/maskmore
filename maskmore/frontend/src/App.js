import React, { useState } from 'react';
import Header from './components/Header';
import MainContainer from './containers/MainContainer';
import Footer from './components/Footer';

const App = () => {
  const [currentView, setCurrentView] = useState(`products`);

  const handleView = currentView => {
    setCurrentView(currentView);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header 
        handleView={handleView}
      />
      <MainContainer
        currentView={currentView}
      />
      <Footer />
    </>
  );
}

export default App;
