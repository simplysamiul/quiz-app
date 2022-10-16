import React from 'react';
import SingleQuiz from './SingleQuiz';

const QuizQuestion = ({singleQuestion, questions}) => {
    const {correctAnswer, options, question, id} = singleQuestion;
    const regex = /(<([^>]+)>)/ig;
    const questionName= question.replace(regex, "");
    
    // see correct ans
    // const [correctAns, setCorrectAns] = useState(false);
    // const handleCorrectAns = () =>{
    //     setCorrectAns(!correctAns);
    // }
    return (
        <div className='quiz-question-area'>
            <div className="quiz-question-container">
                            <div className="quiz-question">
                                <div>
                                <div className="question-and-answer">
                                <p className='question'>{questionName}</p>
                                {/* <div className="show-correct-ans">
                                        <button onClick={handleCorrectAns}>See Correct Ans</button>
                                        {correctAnswer && <p>{correctAnswer}</p>}
                                </div> */}
                                </div>
                               <div className="quiz-option">
                                    {
                                       options.map((option) => {
                                        return(
                                            <SingleQuiz
                                            key={option}
                                            option={option} 
                                            id={id}
                                            singleQuestion={singleQuestion}
                                            correctAnswer={correctAnswer}
                                            questions={questions}
                                            />
                                        )
                                       }) 
                                    }
                               </div>
                                </div>
                            </div>
            </div>
        </div>
    );
};

export default QuizQuestion;