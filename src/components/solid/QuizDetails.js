import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './QuizDetails.css';
import QuizQuestion from './QuizQuestion';

const QuizDetails = () => {
    const {id} = useParams();
    // quiz details 
    const [quizDetails, setQuizDetails] = useState({});
    const {questions, logo, name, total} = quizDetails;
    useEffect(() => {
        const url = `https://openapi.programming-hero.com/api/quiz/${id}`
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if(data.status){
                setQuizDetails(data.data)}
            }
        )
    },[id]);
    return (
        <div className='quiz-details-container'>
            {questions && <div className="quiz-questions">
                {
                    questions.map((singleQuestion) => <QuizQuestion
                    key={singleQuestion?.id} 
                    singleQuestion={singleQuestion}
                    questions={questions}
                    />)
                }
            </div>}
            <div className="quiz-type">
                <div className="each-quiz">
                    <img src={logo} alt="" />
                    <h3>{name}</h3>
                    <p>Total Quiz : {total}</p>
                </div>
            </div>
        </div>
    );
};

export default QuizDetails;