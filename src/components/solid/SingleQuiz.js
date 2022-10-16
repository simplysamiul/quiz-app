import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './SingleQuiz.css'

const SingleQuiz = ({option, correctAnswer, id, singleQuestion, questions}) => {
    // console.log(singleQuestion)
    // auth pop up control
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    // catch user selected ans
    const [userAnsId, setUserAnsId] = useState(id);
    const [userAns, setUserAns] = useState(option);
    const handleRadioButton = (ans, ansId) =>{
        setUserAns(ans);
        setUserAnsId(ansId);
        // call pop up function
        getUserAns();
    };

    const [isCorrect, SetIsCorrect] = useState(false);
    const [isWrong, SetWrongAns] = useState(false);
    const [correctAns, setCorrectAns] = useState({});
    // console.log(option)

    const getUserAns = () => {
        if(correctAnswer === userAns){
            setOpen(true);
            SetIsCorrect(true);
            SetWrongAns(false);
        }
        else{
            setOpen(true);
            SetIsCorrect(false);
            SetWrongAns(true)
            const ans = 
            questions.filter((item) => item.id === userAnsId);
            if(ans){
                setCorrectAns(ans[0])
            }
        }
    }
    return (
        
    <div className="single-option "onClick={() => handleRadioButton(option, id)}>
            <button>{option}</button>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                    <div className="modal-close-button">
                        <button className='close-btn' onClick={() => closeModal(false)}>X</button>
                    </div>
                    <div className="modal-content">
                        {isCorrect && 
                        <div className="correct-ans">
                            <h1>Your Ans is correct .</h1>
                            {/* <p></p> */}
                        </div>
                        }
                        {isWrong && 
                        <div className="wrong-ans">
                            <h1>Your Ans is wrong !</h1>
                            <h5>Correct Ans: {correctAns?.correctAnswer}</h5>
                        </div>
                        }
                    </div>
                </div>
            </Popup>
        </div>
    );
};

export default SingleQuiz;