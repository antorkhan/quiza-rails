import React from 'react';
import NavBar from './NavBar'
import Home from './components/Home'
import Courses from './components/Courses'
import CourseDetails from './components/CourseDetails'
import LessonDetails from './components/LessonDetails'
import AdminDashboard from './components/admin/AdminDashboard'
import AdminEditCourse from './components/admin/AdminEditCourse'
import AdminEditQuestion from './components/admin/AdminEditQuestion'
import AdminEditLesson from './components/admin/AdminEditLesson'
import AdminCourseDetails from './components/admin/AdminCourseDetails'
import AdminLessonDetails from './components/admin/AdminLessonDetails'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
require('dotenv').config({path: './.env.'+process.env.NODE_ENV});


function App() {
  let authHeader =  { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzeXNfdXNlcl9pZCI6MSwiZXhwIjoxNTk1ODU1NDA0fQ.9dfC-SzYVPaWewqT_M52EgvHhJgBJupNn9LA8cd6VKw'
  }
  return (
    <div>

      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route path={'/'} exact component = {Home}/>
          <Route path={'/courses'} exact component = {Courses}/>
          <Route path={'/courses/:courseID/lessons/:lessonID'} exact component = {LessonDetails}/>
          <Route path={'/courses/:courseID'} exact component = {CourseDetails}/>
          <Route exact path='/admin' render={(props) => <AdminDashboard {...props} authHeader={authHeader} />} />
          <Route exact path='/admin/courses/:courseID/lessons/:lessonID/questions/:questionID/edit' render={(props) => <AdminEditQuestion {...props} authHeader={authHeader} />} />
          <Route exact path='/admin/courses/:courseID/lessons/:lessonID/edit' render={(props) => <AdminEditLesson {...props} authHeader={authHeader} />} />
          <Route exact path='/admin/courses/:courseID/lessons/:lessonID/' render={(props) => <AdminLessonDetails {...props} authHeader={authHeader} />} />
          <Route exact path='/admin/courses/:courseID/edit' render={(props) => <AdminEditCourse {...props} authHeader={authHeader} />} />
          <Route exact path='/admin/courses/:courseID' render={(props) => <AdminCourseDetails {...props} authHeader={authHeader} />} />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
