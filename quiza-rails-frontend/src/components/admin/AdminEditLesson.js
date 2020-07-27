import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';




function AdminEditLesson({ match, authHeader }) {
  let history = useHistory();
  const [lesson, setLesson] = useState({});
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetchLesson(match.params.courseID, match.params.lessonID)
  }, []);

  let handleChange = (event) => {
    console.log(event.target.name);
    let newVal = { ...lesson }
    newVal['lesson'][event.target.name] = event.target.value;
    setLesson(newVal)
  };
  let updateLesson = () => {
    let data = lesson.lesson;
    let config = {
      method: 'PATCH',
      url: `${process.env.REACT_APP_URL}/admin/courses/${match.params.courseID}/lessons/${match.params.lessonID}`,
      headers: authHeader,
      data: data
    };
    axios(config)
      .then((res) => {
        setMessage('Lesson updated successfully!');
        console.log(res.data);
      })
      .catch((res) => {
        if (res.response.status === 401) { history.push(`/admin/log-in`) }
      });
  }

  const fetchLesson = async (courseID, lessonID) => {
    let config = {
      method: 'GET',
      url: `${process.env.REACT_APP_URL}/admin/courses/${courseID}/lessons/${lessonID}`,
      headers: authHeader
    };
    axios(config)
      .then((res) => {
        setLesson(res.data);
      })
      .catch((res) => {
        if (res.response.status === 401) { history.push(`/admin/log-in`) }
      });
  }


  return (
    <div className={'container'}>
      <div className={'h4 text-center'}>Editing Lesson</div>
      <div className={'col-8 offset-2'}>
        <div className={'float-left'}><Link to={`/admin/courses/${match.params.courseID}`}>Go Back</Link></div><br></br>
        <div>{message}</div>
        <div>Name:<input className={'form-control'} name={'name'} value={lesson?.lesson?.name} onChange={handleChange} /></div>
        <div>Description:<input className={'form-control'} name={'description'} value={lesson?.lesson?.description} onChange={handleChange} /></div>
        <div><button className={'btn btn-success mt-2'} onClick={updateLesson}>Save</button></div>
      </div>
    </div>
  );
}

export default AdminEditLesson;
