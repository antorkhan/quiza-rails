import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';




function CourseDetails({ match }) {
    const [course, setCourse] = useState({});
    useEffect(()=>{
        fetchCourse(match.params.courseID)
    },[]);

    const fetchCourse = async (courseID)=>{
        axios.get(`http://localhost:3000/courses/${courseID}`)
        .then( (res) => {
          setCourse(res.data);
        })
      }


  return (
    <div>
        <div>{ course?.course?.name } course offers the following lessons.</div> 
        { course?.lessons?.map(lesson => ( 
        <Link key={lesson.id} to={`/courses/${match.params.courseID}/lessons/${lesson.id}`}><h1 > {lesson.name} </h1></Link> 
        ))}
    </div>
  );
}

export default CourseDetails;
