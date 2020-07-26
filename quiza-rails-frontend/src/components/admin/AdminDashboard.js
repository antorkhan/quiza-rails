import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';





function AdminDashboard({authHeader}) {
    const [courses, setCourses] = useState([]);
    const [newCourse, setnewCourse] = useState({name: '', description: ''});
    useEffect(() => {
      fetchCourses();
    },[]);

    const fetchCourses = async ()=>{
        let data = {};
        let config = {
            method: 'GET',
            url: 'http://localhost:3000/admin/courses',
            headers: authHeader,
            data : data
          };

        axios(config)
        .then( (res) => {
            setCourses(res.data.courses);
            console.log(res);
        })
        .catch((res) => {
            console.log(res);
        })
      }
      let deleteCourse = (event) => {
        let data = {};
        let config = {
            method: 'DELETE',
            url: `http://localhost:3000/admin/courses/${event.target.id}`,
            headers: authHeader,
            data : data
          };

        axios(config)
        .then( (res) => {
            console.log(res);
            fetchCourses();
        })
        .catch((res) => {
            console.log(res);
        })
      }
      let updateNewCourseInfo = (event) => {
          let newVal = {...newCourse};
          newVal[event.target.name] = event.target.value;
          setnewCourse(newVal);
      }
      let createNewCourse = (event) => {
        let config = {
            method: 'POST',
            url: `http://localhost:3000/admin/courses/`,
            headers: authHeader,
            data : newCourse
          };

        axios(config)
        .then( (res) => {
            console.log(res);
            fetchCourses();
        })
        .catch((res) => {
            console.log(res);
        })
      }

  return (
    <div>
        admin dashboard
        { courses.map(course=>{
          return <h1 key={course.id}>
                   <Link to={`/admin/courses/${course.id}`}>{course.name}</Link>|<Link to={`/admin/courses/${course.id}/edit`}>edit</Link>|<button id={course.id} onClick={deleteCourse}>delete</button>
                  </h1>
          })}
        <div>Create Course</div>
        <div>Name: <input name={'name'} value={newCourse.name} onChange={updateNewCourseInfo}/></div>
        <div>Description: <input name={'description'} value={newCourse.description} onChange={updateNewCourseInfo}/></div>
        <div><button onClick={createNewCourse}>Create Course</button></div>
    </div>
  );
}

export default AdminDashboard;
