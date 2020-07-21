import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'



function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    fetchCourses();

  },[]);

  const fetchCourses = async ()=>{
    axios.get(`http://localhost:3000/courses`)
    .then( (res) => {
      console.log(res.data.courses);
      setCourses(res.data.courses);
    })
  }

  return (
    <div>
        { courses.map(course=>{
          return <h1 key={course.id}>
                   <Link to={`/courses/${course.id}`}>{course.name}</Link>
                  </h1>
          })}
    </div>
  );
}

export default Courses;
