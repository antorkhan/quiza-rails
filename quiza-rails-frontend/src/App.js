import React from 'react';
import Home from './components/Home'
import Courses from './components/Courses'
import CourseDetails from './components/CourseDetails'
import LessonDetails from './components/LessonDetails'
import AdminDashboard from './components/admin/AdminDashboard'
import AdminEditCourse from './components/admin/AdminEditCourse'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';

function App() {
  let authHeader =  { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzeXNfdXNlcl9pZCI6MSwiZXhwIjoxNTk1ODU1NDA0fQ.9dfC-SzYVPaWewqT_M52EgvHhJgBJupNn9LA8cd6VKw'
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component = {Home}/>
        <Route path={'/courses'} exact component = {Courses}/>
        <Route path={'/courses/:courseID/lessons/:lessonID'} exact component = {LessonDetails}/>
        <Route path={'/courses/:courseID'} exact component = {CourseDetails}/>
        <Route exact path='/admin' render={(props) => <AdminDashboard {...props} authHeader={authHeader} />} />
        <Route exact path='/admin/courses/:courseID/edit' render={(props) => <AdminEditCourse {...props} authHeader={authHeader} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
