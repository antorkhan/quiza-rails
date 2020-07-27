import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'



function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();

  }, []);

  const fetchCourses = async () => {
    axios.get(`${process.env.REACT_APP_URL}/courses`)
      .then((res) => {
        console.log(res.data.courses);
        setCourses(res.data.courses);
      })
  }

  return (
    <div className={'container'}>
      <div className={'h3 text-center mb-4 mt-5'}>Course List</div>
      <div className={'float-left'}><Link to={`/`}>Go Back</Link></div>
      <div>
        <table className={"table table-striped table-bordered"}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course Name</th>
              <th scope="col">Course Description</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course,index) => {
              return <tr key={course.id}>
                <td scope="row">{index+1}</td>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td><Link to={`/courses/${course.id}`}>View Detail</Link></td>

              </tr>
            })}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Courses;
