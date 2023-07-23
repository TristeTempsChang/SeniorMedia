import React, { useState } from 'react';
import '../styles/Header.css';
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Header({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <header>
      <div className="overlay">
        <h2>Bienvenue dans le paradis des recettes de cuisines !</h2>
        <Container maxWidth="md" sx={{ mt: 10 }}>
          <TextField
            type="search"
            id="search"
            label="Rechercher..."
            sx={{ width: 600, backgroundColor: 'whitesmoke', borderRadius: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Container>
        <br />
        <br />
      </div>
    </header>
  );
}

export default Header;
