import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';




function AdminEditLesson({ match , authHeader}) {
    const [lesson, setLesson] = useState({});
    useEffect(()=>{
        fetchLesson(match.params.courseID,match.params.lessonID)
    },[]);

    let handleChange = (event) => {
        console.log(event.target.name);
        let newVal = {...lesson}
        newVal['lesson'][event.target.name] = event.target.value; 
        setLesson(newVal)
    };
    let updateLesson = () => {
        let data = lesson.lesson;
        let config = {
            method: 'PATCH',
            url: `${process.env.REACT_APP_URL}/admin/courses/${match.params.courseID}/lessons/${match.params.lessonID}`,
            headers: authHeader,
            data : data
          };
        axios(config)
        .then( (res) => {
          console.log(res.data);
        })
    }

    const fetchLesson = async (courseID,lessonID)=>{
        let config = {
            method: 'GET',
            url: `${process.env.REACT_APP_URL}/admin/courses/${courseID}/lessons/${lessonID}`,
            headers: authHeader
          };
        axios(config)
        .then( (res) => {
          setLesson(res.data);
        })
      }


  return (
    <div>
        <div>{ lesson?.lesson?.name } Editing Lesson?</div> 
        <div>Name:<input name={'name'} value={lesson?.lesson?.name} onChange={handleChange}/></div>
        <div>Description:<input name={'description'} value={lesson?.lesson?.description} onChange={handleChange}/></div>
        <div><button onClick={updateLesson}>Save</button></div>
    </div>
  );
}

export default AdminEditLesson;
