import '../styles/singleRecipe.css';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import axios from 'axios'
import Chip from '@mui/material/Chip';
import DOMPurify from 'dompurify';

function SingleRecipe() {
    let { recipeId } = useParams();
    const [data, setData] = useState({});
  
    useEffect(() => {
      axios.get(`http://localhost:3001/show_recipe`, { params: { _id: recipeId } })
        .then(response => {
          setData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, [recipeId]);
  
    return (
      <div>
        <header>
        <div class="overlay">
            <h2>Recette de cuisine</h2>
            <br />
            <br />
            <Link className='lien' to="/"><ArrowBackIcon /><p> Retour au menu</p></Link>
        </div>
      </header>
        {data && (
          <div className='blocRecipe'>
            <strong><p className='titreRecipe'>{data.nom}</p></strong>
            <br />
            <Chip className='chipType' label={data.type} />
            <br />
            <br />
            <img src={data.img} className='imageRecipe' alt='imgRecipe' />
            <br />
            <br />
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.contenu) }}></div>
          </div>
        )}
        <Footer />
      </div>
    );
  }
  
  export default SingleRecipe;