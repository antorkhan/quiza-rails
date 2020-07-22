import React, { useEffect,useState } from 'react';
//import {Link} from 'react-router-dom'
import axios from 'axios';




function LessonDetails({ match }) {    
    const [lesson, setLesson] = useState([]);
    const [answers,setAnswers] = useState({});
    const [result, setResult] = useState('')
    useEffect(()=>{
        console.log(match.params);
        fetchLessonDetails(match.params.courseID,match.params.lessonID);
    },[]);


    const fetchLessonDetails = async (courseID, lessonID)=>{
        axios.get(`http://localhost:3000/courses/${courseID}/lessons/${lessonID}`)
        .then( (res) => {
            setLesson(res.data);
        })
        .catch((res)=>{

        });
      }
    const submitForEvaluation = async () => {
        axios.post(`http://localhost:3000/evaluate-answers`,{ answers: answers, courseID: match.params.courseID, lessonID: match.params.lessonID} )
        .then((res) => {
            console.log(res);
            setResult(`Your score is ${res.data.score}`);
        })
        .catch((res) => {
            setResult(`Something Went Wrong!`);
        })
    };
      
    const onOptionSelect = (event) => {
        setAnswers({
            ...answers,
            [event.target.name]: event.target.value
        })
    };


  return (
    <div>
        { lesson?.questions?.map((question,index) => (
            <div className={'text-success'} key={question.id}>
                <div>Question{index+1}: {question.text}</div>
                <div><input value={1} type={'radio'} name={question.id} onChange={onOptionSelect}/> {question.option_1}</div>
                <div><input value={2} type={'radio'} name={question.id} onChange={onOptionSelect}/> {question.option_2}</div>
                <div><input value={3} type={'radio'} name={question.id} onChange={onOptionSelect}/> {question.option_3}</div>
                <div><input value={4} type={'radio'} name={question.id} onChange={onOptionSelect}/> {question.option_4}</div>
            </div> 
             ))}
        <div>{result}</div>
        <button onClick={submitForEvaluation}>End Test</button>
    </div>
  );
}

export default LessonDetails;
