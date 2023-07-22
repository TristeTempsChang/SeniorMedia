import '../styles/Create.css';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from './Footer';
import axios from 'axios'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const ColorButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: 'gray',
  '&:hover': {
    backgroundColor: 'gray',
  },
}));

function Create() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    nom: '',
    type: '',
    img: '',
    contenu: '',
    time: '',
    view: 0,
  });

  const [errorFields, setErrorFields] = useState({
    nom: false,
    type: false,
    img: false,
    time: false
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));

    setErrorFields((prevErrorFields) => ({
      ...prevErrorFields,
      [name]: false,
    }));
  };

  const handleFormChange2 = (contenu) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      contenu: contenu,
    }));
  };

  const handleFormSubmit = () => {
    const { nom, type, img, contenu, time, view } = formValues;

    if (!nom || !type || !img || !time) {
      setErrorFields({
        nom: !nom,
        type: !type,
        img: !img,
        time: !time,
      });

      return;
    }
  
    axios
      .post('http://localhost:3001/add_recipe', {
        nom,
        type,
        img,
        contenu,
        time,
        view,
      })
      .then((response) => {
        const savedRecipe = response.data.data;
        console.log(savedRecipe);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <header>
        <div class="overlay">
            <h2>Création d'une recette de cuisine !</h2>
            <br />
            <br />
            <Link className='lien' to="/"><ArrowBackIcon /><p> Retour au menu</p></Link>
        </div>
      </header>
      <div>
        <div className='form'>
          <TextField
            autoFocus
            margin="dense"
            id="nom"
            label="Nom de la recette"
            type="text"
            name='nom'
            fullWidth
            variant="standard"
            error={errorFields.nom}
            helperText={errorFields.nom ? "Champ obligatoire" : ""}
            value={formValues.nom}
            onChange={handleFormChange}
          />
          <br />
          <br />
          <TextField
            autoFocus
            margin="dense"
            id="type"
            label="Pays d'origine de la recette"
            type="text"
            name='type'
            fullWidth
            variant="standard"
            error={errorFields.type}
            helperText={errorFields.type ? "Champ obligatoire" : ""}
            value={formValues.type}
            onChange={handleFormChange}
          />
          <br />
          <br />
          <TextField
            autoFocus
            margin="dense"
            id="img"
            label="URL de l'image"
            type="text"
            name='img'
            fullWidth
            variant="standard"
            error={errorFields.img}
            helperText={errorFields.img ? "Champ obligatoire" : ""}
            value={formValues.img}
            onChange={handleFormChange}
          />
          <br />
          <br />
          <TextField
            autoFocus
            margin="dense"
            id="time"
            label="Temps moyen de la recette"
            name='time'
            type="number"
            fullWidth
            variant="standard"
            error={errorFields.time}
            helperText={errorFields.time ? "Champ obligatoire" : ""}
            value={formValues.time}
            onChange={handleFormChange}
          />
          <br />
          <br />
          <br />
          <br />
          <ReactQuill theme='snow' name='contenu' value={formValues.contenu} onChange={handleFormChange2} />
          <br />
          <br />
          <ColorButton variant="contained" className='espace' onClick={handleFormSubmit}><AddIcon className='add' />Ajouter</ColorButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Create;