import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './QuizType.css';

const QuizType = () => {
    const [quizCategories, setQuizCategories] = useState([]);
    console.log(quizCategories) 
    useEffect(() => {
        const categoryUrl = "https://openapi.programming-hero.com/api/quiz";
        fetch(categoryUrl)
        .then((res)=> res.json())
        .then((data) => setQuizCategories(data.data))
    },[])
    return (
        <div className='quiz-type-area'>
            <div className="quiz-type-container">
                <div className="quiz-category">
                    {
                        quizCategories.map((quizCategory) => {
                            const {id, logo, name, total} = quizCategory
                            return(
                                <div className="each-quiz">
                                    <img src={logo} alt="" />
                                    <h3>{name}</h3>
                                    <p>Total Quiz : {total}</p>
                                    <Link to={`/quiz_${id}`} className="quiz-card-btn">Go To Quiz</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default QuizType;