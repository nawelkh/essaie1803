import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//chemin 
import Actualite from './components/actualite/actualite'
import Groupes from './components/groupes/groupes'
import Profil from './components/profil/profil'
import Inscription from './components/log/inscription'
import Forgetpass from './components/log/forgetpass'
import EditForm from "./components/profil/Editformetd";
import Suite from "./components/profil/Suiteinscription";
//css 
import "tailwindcss/tailwind.css";
import './App.css';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/groupes' component={Groupes} />
          <Route path='/' exact component={Actualite} />
          <Route path='/profil' exact component={Profil} />
          <Route path='/inscription' exact component={Inscription} />
          <Route path='/forget' exact component={Forgetpass} />
          <Route path='/editForm' exact component={EditForm} />
          <Route path='/suite' exact component={Suite} />
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
