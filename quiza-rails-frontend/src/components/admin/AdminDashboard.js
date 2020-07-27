import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';





function AdminDashboard({ authHeader }) {
    const [courses, setCourses] = useState([]);
    let initialState = { name: '', description: '' }
    const [newCourse, setnewCourse] = useState(initialState);
    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        let data = {};
        let config = {
            method: 'GET',
            url: `${process.env.REACT_APP_URL}/admin/courses`,
            headers: authHeader,
            data: data
        };

        axios(config)
            .then((res) => {
                setCourses(res.data.courses);
                console.log(res);
            })
            .catch((res) => {
                console.log(res);
            })
    }
    let deleteCourse = (event) => {
        let data = {};
        const url = `${process.env.REACT_APP_URL}/admin/courses/${event.target.id}`;
        let config = {
            method: 'DELETE',
            url: url,
            headers: authHeader,
            data: data
        };

        axios(config)
            .then((res) => {
                console.log(res);
                fetchCourses();
            })
            .catch((res) => {
                console.log(res);
            })
    }
    let updateNewCourseInfo = (event) => {
        let newVal = { ...newCourse };
        newVal[event.target.name] = event.target.value;
        setnewCourse(newVal);
    }
    let createNewCourse = (event) => {
        let config = {
            method: 'POST',
            url: `${process.env.REACT_APP_URL}/admin/courses/`,
            headers: authHeader,
            data: newCourse
        };

        axios(config)
            .then((res) => {
                console.log(res);
                setnewCourse(initialState);
                fetchCourses();
            })
            .catch((res) => {
                console.log(res);
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
                            <th scope="col">View Lessons</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => {
                            return <tr key={course.id}>
                                <td scope="row">{index + 1}</td>
                                <td>{course.name}</td>
                                <td>{course.description}</td>
                                <td><Link to={`/admin/courses/${course.id}`}>View Lesson</Link></td>
                                <td><Link to={`/admin/courses/${course.id}/edit`}><button className={'btn btn-info'}>edit</button></Link></td>
                                <td><button id={course.id} className={'btn btn-danger'} onClick={deleteCourse}>delete</button></td>

                            </tr>
                        })}

                    </tbody>
                </table>
                <div>
                    <div>Create Course</div>
                    <div className={'row'}>
                        <div className={'col-4'}>
                            Name: <input className={'form-control'} name={'name'} value={newCourse.name} onChange={updateNewCourseInfo} placeholder={'Course Name Here'} />
                        </div>
                        <div className={'col-4'}>
                            Description: <input className={'form-control'} name={'description'} value={newCourse.description} onChange={updateNewCourseInfo} placeholder={'Course Description Here'} />
                        </div>
                    </div>

                    <div><button className={'mt-3 btn btn-success'} onClick={createNewCourse}>Create Course</button></div>
                </div>
            </div>
        </div>
    );


}

export default AdminDashboard;
