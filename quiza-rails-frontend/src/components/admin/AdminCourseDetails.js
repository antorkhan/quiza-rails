import React, { useEffect, useState } from 'react';
import { Link,useHistory  } from 'react-router-dom'
import axios from 'axios';




function AdminCourseDetails({ match, authHeader }) {
    let history = useHistory();
    const [course, setCourse] = useState({});
    let initialState = { name: '', description: '' }
    const [newLesson, setNewLesson] = useState(initialState);
    useEffect(() => {
        fetchCourse(match.params.courseID)
    }, []);

    let updateNewLessonInfo = (event) => {
        let newVal = { ...newLesson };
        newVal[event.target.name] = event.target.value;
        setNewLesson(newVal);
    }

    let createNewLesson = (event) => {
        let config = {
            method: 'POST',
            url: `${process.env.REACT_APP_URL}/admin/courses/${course?.course?.id}/lessons`,
            headers: authHeader,
            data: newLesson
        };

        axios(config)
            .then((res) => {
                console.log(res);
                fetchCourse(course.course.id);

            })
            .catch((res) => {
                if(res.response.status === 401){history.push(`/admin/log-in`)}
                console.log(res);
            })
    }

    const fetchCourse = async (courseID) => {
        console.log(process.env.REACT_APP_URL);
        let config = {
            method: 'GET',
            url: `${process.env.REACT_APP_URL}/admin/courses/${match.params.courseID}`,
            headers: authHeader
        };

        axios(config)
            .then((res) => {
                setCourse(res.data);
                console.log(res);

            })
            .catch((res) => {
                if(res.response.status === 401){history.push(`/admin/log-in`)}
                console.log(res);
            })
    }
    let deleteLesson = (event) => {
        let data = {};
        const url = `${process.env.REACT_APP_URL}/admin/courses/${course?.course?.id}/lessons/${event.target.id}`;
        let config = {
            method: 'DELETE',
            url: url,
            headers: authHeader,
            data: data
        };

        axios(config)
            .then((res) => {
                console.log(res);
                fetchCourse(course.course.id);
            })
            .catch((res) => {
                if(res.response.status === 401){history.push(`/admin/log-in`)}
                console.log(res);
            })
    }

    return (
        <div className={'container'}>
            <div className={'h3 text-center mb-4 mt-5'}>Lessons of {course?.course?.name}</div>
            <div className={'float-left'}><Link to={`/admin`}>Go Back</Link></div>
            <div>
                <table className={"table table-striped table-bordered"}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Lesson Name</th>
                            <th scope="col">Lesson Description</th>
                            <th scope="col">Handle</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {course?.lessons?.map((lesson, index) => {
                            return <tr key={lesson.id}>
                                <td scope="row">{index + 1}</td>
                                <td>{lesson.name}</td>
                                <td>{lesson.description}</td>
                                <td><Link key={lesson.id} to={`/admin/courses/${match.params.courseID}/lessons/${lesson.id}`}> View Questions </Link> </td>
                                <td><Link to={`/admin/courses/${course.course.id}/lessons/${lesson.id}/edit`}><button className={'btn btn-info'}>edit</button></Link></td>
                                <td><button id={lesson.id} className={'btn btn-danger'} onClick={deleteLesson} >delete</button></td>

                            </tr>
                        })}

                    </tbody>
                </table>
            </div>

            <div>
                    <div>Add Lesson</div>
                    <div className={'row'}>
                        <div className={'col-4'}>
                            Name: <input className={'form-control'} name={'name'} value={newLesson.name} onChange={updateNewLessonInfo} placeholder={'Lesson Name Here'} />
                        </div>
                        <div className={'col-4'}>
                            Description: <input className={'form-control'} name={'description'} value={newLesson.description} onChange={updateNewLessonInfo} placeholder={'Lesson Description Here'} />
                        </div>
                    </div>

                    <div><button className={'mt-3 btn btn-success'} onClick={createNewLesson}>Add Lesson</button></div>
                </div>

        </div>
    );





}

export default AdminCourseDetails;
