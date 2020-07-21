import React from 'react';
import Home from './components/Home'
import Courses from './components/Courses'
import CourseDetails from './components/CourseDetails'
import LessonDetails from './components/LessonDetails'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component = {Home}/>
        <Route path={'/courses'} exact component = {Courses}/>
        <Route path={'/courses/:courseID/lessons/:lessonID'} exact component = {LessonDetails}/>
        <Route path={'/courses/:courseID'} exact component = {CourseDetails}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
