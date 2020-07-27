import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';




function AdminEditCourse({ match , authHeader}) {
    const [course, setCourse] = useState({});
    useEffect(()=>{
        fetchCourse(match.params.courseID)
    },[]);

    let handleChange = (event) => {
        console.log(event.target.name);
        let newVal = {...course}
        newVal['course'][event.target.name] = event.target.value; 
        setCourse(newVal)
    };
    let updateCourse = () => {
        let data = course.course;
        let config = {
            method: 'PATCH',
            url: `${process.env.REACT_APP_URL}/admin/courses/${course.course.id}`,
            headers: authHeader,
            data : data
          };
        axios(config)
        .then( (res) => {
          console.log(res.data);
        })
    }

    const fetchCourse = async (courseID)=>{
        let config = {
            method: 'get',
            url: `${process.env.REACT_APP_URL}/admin/courses/${courseID}`,
            headers: authHeader
          };
        axios(config)
        .then( (res) => {
          setCourse(res.data);
        })
      }


  return (
    <div>
        <div>{ course?.course?.name } Editing Course</div> 
        <div>Name:<input name={'name'} value={course?.course?.name} onChange={handleChange}/></div>
        <div>Description:<input name={'description'} value={course?.course?.description} onChange={handleChange}/></div>
        <div><button onClick={updateCourse}>Save</button></div>
    </div>
  );
}

export default AdminEditCourse;
