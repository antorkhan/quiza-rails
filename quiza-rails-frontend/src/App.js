import React from 'react';
import Home from './components/Home'
import Courses from './components/Courses'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component = {Home}/>
        <Route path={'/courses'} exact component = {Courses}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
