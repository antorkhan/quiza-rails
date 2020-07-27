import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';




function AdminCourseDetails({ match, authHeader }) {
    const [lesson, setLesson] = useState({});
    let initialState = { text: '', option_1: '', option_2: '', option_3: '', option_4: '', correct_option: '1' }
    const [newQuestion, setNewQuestion] = useState(initialState);
    useEffect(() => {
        fetchLesson(match?.params?.courseID, match?.params?.lessonID);
    }, []);

    let updateNewLessonInfo = (event) => {
        let newVal = { ...newQuestion };
        newVal[event.target.name] = event.target.value;
        setNewQuestion(newVal);
    }

    let createNewQuestion = (event) => {
        let config = {
            method: 'POST',
            url: `${process.env.REACT_APP_URL}/admin/courses/${match?.params?.courseID}/lessons/${match?.params?.lessonID}/questions`,
            headers: authHeader,
            data: newQuestion
        };

        axios(config)
            .then((res) => {
                console.log(res);
                fetchLesson(match?.params?.courseID, match?.params?.lessonID);

            })
            .catch((res) => {
                console.log(res);
            })
    }

    const fetchLesson = async (courseID, lessonID) => {
        console.log(process.env.REACT_APP_URL);
        let config = {
            method: 'GET',
            url: `${process.env.REACT_APP_URL}/admin/courses/${match.params.courseID}/lessons/${match.params.lessonID}`,
            headers: authHeader
        };

        axios(config)
            .then((res) => {
                setLesson(res.data);
                console.log(res);

            })
            .catch((res) => {
                console.log(res);
            })
    }
    let deleteQuestion = (event) => {
        let data = {};
        const url = `${process.env.REACT_APP_URL}/admin/courses/${match?.params?.courseID}/lessons/${match?.params?.lessonID}/questions/${event.target.id}`;
        let config = {
            method: 'DELETE',
            url: url,
            headers: authHeader,
            data: data
        };

        axios(config)
            .then((res) => {
                console.log(res);
                fetchLesson(match?.params?.courseID, match?.params?.lessonID);
            })
            .catch((res) => {
                console.log(res);
            })
    }

    return (
        <div className={'container-fluid'}>
            <div className={'h3 text-center mb-4 mt-5'}>Questions</div>
            <div className={'float-left'}><Link to={`/admin/courses/${match?.params?.courseID}`}>Go Back</Link></div>
            <div>
                <table className={"table table-striped table-bordered"}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Question Text</th>
                            <th scope="col">Option 1</th>
                            <th scope="col">Option 2</th>
                            <th scope="col">Option 3</th>
                            <th scope="col">Option 4</th>
                            <th scope="col">Correct Option</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lesson?.questions?.map((question, index) => {
                            return <tr key={question.id}>
                                <td scope="row">{index + 1}</td>
                                <td>{question.text}</td>
                                <td>{question.option_1}</td>
                                <td>{question.option_2}</td>
                                <td>{question.option_3}</td>
                                <td>{question.option_4}</td>
                                <td>{question.correct_option}</td>
                                <td><Link to={`/admin/courses/${match?.params?.courseID}/lessons/${match?.params?.lessonID}/questions/${question.id}/edit`}><button className={'btn btn-info'}>edit</button></Link></td>
                                <td><button id={question.id} className={'btn btn-danger'} onClick={deleteQuestion} >delete</button></td>

                            </tr>
                        })}

                    </tbody>
                </table>
            </div>

            <div>
                <div>Add Question</div>
                <div className={'row'}>
                    <div className={'col-8 pt-2 pb-3'}>
                        Question Text: <input className={'form-control'} name={'text'} value={newQuestion.text} onChange={updateNewLessonInfo} placeholder={'Question Text Here'} />
                    </div>
                    <div className={'col-4 pt-2 pb-3'}>
                        Correct Option:
                            <select name={'correct_option'} onChange={updateNewLessonInfo} value={newQuestion.correct_option} className={'form-control'}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                        </select>
                    </div>
                    <div className={'col-3'}>
                        Option 1: <input className={'form-control'} name={'option_1'} value={newQuestion.option_1} onChange={updateNewLessonInfo} placeholder={'Option 1'} />
                    </div>

                    <div className={'col-3'}>
                        Option 2: <input className={'form-control'} name={'option_2'} value={newQuestion.option_2} onChange={updateNewLessonInfo} placeholder={'Option 2'} />
                    </div>

                    <div className={'col-3'}>
                        Option 2: <input className={'form-control'} name={'option_3'} value={newQuestion.option_3} onChange={updateNewLessonInfo} placeholder={'Option 2'} />
                    </div>

                    <div className={'col-3'}>
                        Option 2: <input className={'form-control'} name={'option_4'} value={newQuestion.option_4} onChange={updateNewLessonInfo} placeholder={'Option 2'} />
                    </div>
                </div>

                <div><button className={'mt-3 btn btn-success'} onClick={createNewQuestion}>Add Question</button></div>
            </div>

        </div>
    );





}

export default AdminCourseDetails;
