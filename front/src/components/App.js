import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Accueil from './Accueil';
import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Header onSearchChange={handleSearchChange} />
      <Accueil searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;
