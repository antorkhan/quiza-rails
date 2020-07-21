import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';




function LessonDetails({ match }) {
    const [lesson, setLesson] = useState([]);
    useEffect(()=>{
        console.log(match.params);
        fetchLessonDetails(match.params.courseID,match.params.lessonID);
    },[]);


    const fetchLessonDetails = async (courseID, lessonID)=>{
        axios.get(`http://localhost:3000/courses/${courseID}/lessons/${lessonID}`)
        .then( (res) => {
            setLesson(res.data);
        })
      }


  return (
    <div>
        { lesson?.questions?.map((question,index) => (
            <div key={question.id}>
                <div>Question{index+1}: {question.text}</div>
                <div>a) {question.option_1}</div>
                <div>b) {question.option_2}</div>
                <div>3) {question.option_3}</div>
                <div>4) {question.option_4}</div>
            </div> 
             ))}
        
    </div>
  );
}

export default LessonDetails;
