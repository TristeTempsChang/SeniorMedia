import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Create from './components/create';
import Edit from './components/edition';
import SingleRecipe from './components/singleRecipe';

const root = ReactDOM.createRoot(document.getElementById('root'));

function AppRoutes(){
    return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<Create />} />
        <Route path=':recipeId' element={<SingleRecipe />} />
        <Route path=":recipeId/edit" element={<Edit/>} />
      </Routes>
    )
}

root.render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
