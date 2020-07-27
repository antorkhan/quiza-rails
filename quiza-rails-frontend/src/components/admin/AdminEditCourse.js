import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';




function AdminEditCourse({ match, authHeader }) {
  let history = useHistory();
  const [course, setCourse] = useState({});
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetchCourse(match.params.courseID)
  }, []);

  let handleChange = (event) => {
    console.log(event.target.name);
    let newVal = { ...course }
    newVal['course'][event.target.name] = event.target.value;
    setCourse(newVal)
  };
  let updateCourse = () => {
    let data = course.course;
    let config = {
      method: 'PATCH',
      url: `${process.env.REACT_APP_URL}/admin/courses/${course.course.id}`,
      headers: authHeader,
      data: data
    };
    axios(config)
      .then((res) => {
        setMessage('Course Updated Successfully');
        console.log(res.data);
      })
      .catch((res) => {
        if (res.response.status === 401) { history.push(`/admin/log-in`) }
      });
  }

  const fetchCourse = async (courseID) => {
    let config = {
      method: 'get',
      url: `${process.env.REACT_APP_URL}/admin/courses/${courseID}`,
      headers: authHeader
    };
    axios(config)
      .then((res) => {
        setCourse(res.data);
      })
      .catch((res) => {
        if (res.response.status === 401) { history.push(`/admin/log-in`) }
      })
  }


  return (
    <div className={'container'}>
      <div className={'h3 text-center'}>{course?.course?.name} Editing Course</div>
      <div className={'float-left'}><Link to={`/admin/courses/${match.params.courseID}`}>Go Back</Link></div><br></br>
      <div>{message}</div>
      <div>Name:<input className={'form-control'} name={'name'} value={course?.course?.name} onChange={handleChange} /></div>
      <div>Description:<input className={'form-control'} name={'description'} value={course?.course?.description} onChange={handleChange} /></div>
      <div><button className={'btn btn-info mt-2'} onClick={updateCourse}>Update Course</button></div>
    </div>
  );
}

export default AdminEditCourse;
