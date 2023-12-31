import '../styles/Accueil.css';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CircularProgress from '@mui/material/CircularProgress';

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: 'gray',
    '&:hover': {
      backgroundColor: 'gray',
    },
  }));

function Accueil({ searchTerm }) {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const recipesPerPage = 4;

  useEffect(() => {
    axios.get('http://localhost:3001/get_recipe')
      .then(response => {
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  
  const filteredRecipes = data.filter(recipe => {
    const searchTerms = searchTerm.trim().toLowerCase().split(' ');
    const recipeTitle = recipe.nom.toLowerCase();
    return searchTerms.every(term => recipeTitle.includes(term));
  });

  const indexOfLastRecipe = page * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const recipesToShow = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);


  return (
    <div>
      <div className='navbar'>
        <p className='espace'>{data.length} recettes</p>
        <Pagination
          count={Math.ceil(data.length / recipesPerPage)}
          variant="outlined"
          shape="rounded"
          className='espace'
          page={page}
          onChange={(event, value) => setPage(value)}
        />
        <Link to="/create">
          <ColorButton variant="contained" className='espace'>
            <AddIcon className='add' />
            Ajouter une recette
          </ColorButton>
        </Link>
      </div>
      <div className='ensembleRecipe'>
        {loading ? ( 
          <div className='loadingContainer'>
            <CircularProgress size={100} sx={{color:"gray"}}  />
          </div>
        ) : (
          recipesToShow.map(recipe => (
            <div className='sousEnsemble' key={recipe._id.$oid}>
              <Card className='cardRecipe' sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={recipe.img}
                  title="plat"
                />
                <CardContent>
                  <Chip label={recipe.type} />
                  <Link className='title' to={`${recipe._id.$oid}`}><Typography gutterBottom variant="h5" component="div">
                    {recipe.nom}
                  </Typography></Link>
                </CardContent>
                <CardActions className='actionAndIcons'>
                  <div className='display'>
                    <AccessAlarmIcon />
                    <p className='value'>{recipe.time} min</p>
                  </div>
                  <div className='display2'>
                    <VisibilityIcon />
                    <p className='value'>{recipe.view} vues</p>
                  </div>
                </CardActions>
                <Link to={`${recipe._id.$oid}/edit`}><Button className="btn" size="small">Editer</Button></Link>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Accueil;