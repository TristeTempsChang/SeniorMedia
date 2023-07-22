import '../styles/Header.css';
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <header>
	    <div class="overlay">
            <h2>Bienvenue dans le paradis des recettes de cuisines !</h2>
            <Container maxWidth="md" sx={{ mt: 10 }}>
                <TextField  type="search" id="search" label="Rechercher..." sx={{ width: 600, backgroundColor: 'whitesmoke', borderRadius: 1}} InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                    <SearchIcon />
                    </InputAdornment>
                ),
                }} />
            </Container>
            <br />
            <br />
        </div>
    </header>
  );
}

export default Header;
