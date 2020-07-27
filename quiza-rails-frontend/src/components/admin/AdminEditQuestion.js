import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';




function AdminEditQuestion({ match, authHeader }) {
    const [question, setQuestion] = useState({});
    useEffect(() => {
        fetchQuestion(match.params.courseID, match.params.lessonID, match.params.questionID)
    }, []);

    let handleChange = (event) => {
        console.log(event.target.name);
        let newVal = { ...question }
        newVal['question'][event.target.name] = event.target.value;
        setQuestion(newVal)
    };
    let updateQuestion = () => {
        let data = question.question;
        let config = {
            method: 'PATCH',
            url: `${process.env.REACT_APP_URL}/admin/courses/${match.params.courseID}/lessons/${match.params.lessonID}/questions/${match.params.questionID}`,
            headers: authHeader,
            data: data
        };
        axios(config)
            .then((res) => {
                console.log(res.data);
            })
    }

    const fetchQuestion = async (courseID, lessonID, questionID) => {
        let config = {
            method: 'GET',
            url: `${process.env.REACT_APP_URL}/admin/courses/${courseID}/lessons/${lessonID}/questions/${questionID}`,
            headers: authHeader
        };
        axios(config)
            .then((res) => {
                console.log(res.data);
                setQuestion(res.data);
            })
    }


    return (
        <div>
            <div>Update Question</div>
            <div className={'float-left'}><Link to={`/admin/courses/${match?.params?.courseID}/lessons/${match?.params?.lessonID}`}>Go Back</Link></div>
            <div className={'row'}>
                <div className={'col-8 pt-2 pb-3'}>
                    Question Text: <input className={'form-control'} name={'text'} value={question?.question?.text} onChange={handleChange} placeholder={'Question Text Here'} />
                </div>
                <div className={'col-4 pt-2 pb-3'}>
                    Correct Option:
            <select name={'correct_option'} onChange={handleChange} value={question?.question?.correct_option} className={'form-control'}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className={'col-3'}>
                    Option 1: <input className={'form-control'} name={'option_1'} value={question?.question?.option_1} onChange={handleChange} placeholder={'Option 1'} />
                </div>

                <div className={'col-3'}>
                    Option 2: <input className={'form-control'} name={'option_2'} value={question?.question?.option_2} onChange={handleChange} placeholder={'Option 2'} />
                </div>

                <div className={'col-3'}>
                    Option 2: <input className={'form-control'} name={'option_3'} value={question?.question?.option_3} onChange={handleChange} placeholder={'Option 2'} />
                </div>

                <div className={'col-3'}>
                    Option 2: <input className={'form-control'} name={'option_4'} value={question?.question?.option_4} onChange={handleChange} placeholder={'Option 2'} />
                </div>
            </div>

            <div><button className={'mt-3 btn btn-success'} onClick={updateQuestion}>Update Question</button></div>
        </div>


    );
}

export default AdminEditQuestion;
