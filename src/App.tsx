import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FormCards from './components/FormCards';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [tab, setTab] = useState('simple');

  const getCardPosition = (cardTab: string) => {
    if (tab === cardTab) return "center";
    if (
      (cardTab === 'simple' && tab === 'stripe') ||
      (cardTab === 'recaptcha' && tab === 'simple') ||
      (cardTab === 'stripe' && tab === 'recaptcha')
    ) {
      return "left";
    }
    return "right";
  };

  const handleCardClick = (cardTab: string) => {
    if (tab !== cardTab) {
      setTab(cardTab);
    }
  };

  return (
    <>
      <ThemeToggle />
      <div className="container">
        <Header />
        <FormCards 
          tab={tab}
          getCardPosition={getCardPosition}
          handleCardClick={handleCardClick}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
