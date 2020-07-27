import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';




function CourseDetails({ match }) {
    const [course, setCourse] = useState({});
    useEffect(()=>{
        fetchCourse(match.params.courseID)
    },[]);

    const fetchCourse = async (courseID)=>{
      console.log(process.env.REACT_APP_URL);
        axios.get(`${process.env.REACT_APP_URL}/courses/${courseID}`)
        .then( (res) => {
          setCourse(res.data);
        })
      }

  return (
    <div className={'container'}>
      <div className={'h3 text-center mb-4 mt-5'}>Lessons List</div>
      <div className={'float-left'}><Link to={`/courses`}>Go Back</Link></div>
      <div>
        <table className={"table table-striped table-bordered"}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Lesson Name</th>
              <th scope="col">Lesson Description</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {course?.lessons?.map((lesson,index) => {
              return <tr key={lesson.id}>
                <td scope="row">{index+1}</td>
                <td>{lesson.name}</td>
                <td>{lesson.description}</td>
                <td><Link key={lesson.id} to={`/courses/${match.params.courseID}/lessons/${lesson.id}`}> Take Quiz </Link> </td>

              </tr>
            })}

          </tbody>
        </table>
      </div>
    </div>
  );





}

export default CourseDetails;
