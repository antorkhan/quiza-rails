import React, { useEffect, useState } from 'react';
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
import AdminLogin from './components/admin/AdminLogin'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
require('dotenv').config({ path: './.env.' + process.env.NODE_ENV });


function App() {
  let [authInfo, setAuthInfo] = useLocalStorage('authInfo',{
    token: "",
    exp: "",
    username: ""
  });
  let authHeader = {
    'Authorization': `Bearer ${authInfo.token}`
  }
  return (
    <div>

      <BrowserRouter>
        <NavBar authInfo={authInfo} setAuthInfo={setAuthInfo}/>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/courses'} exact component={Courses} />
          <Route path={'/courses/:courseID/lessons/:lessonID'} exact component={LessonDetails} />
          <Route path={'/courses/:courseID'} exact component={CourseDetails} />
          <Route exact path='/admin' render={(props) => <AdminDashboard {...props} authHeader={authHeader} />} />
          <Route exact path='/admin/log-in' render={(props) => <AdminLogin {...props} setAuthInfo={setAuthInfo} />} />
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

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}