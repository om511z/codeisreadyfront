import React, { Fragment, useState } from 'react'
import QuestionList from './JavaQuestion'
import { v4 as uuidv4 } from 'uuid'
const JavaQuiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [showScore, setShowScore] = useState(false);
  
    const handleCorrect = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }
      setClicked(true);
    }
  
    const handleNextQuestion = () => {
      setClicked(false);
      if (currentQuestion < QuestionList.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setShowScore(true);
      }
    }
  return (
    <div className='sp'>
    {showScore ? (
      <div className='container col-lg-4 mt-5'>
        <div className='qa_box'>
          <div className='qa_header'>

            <span>Completed Your Score: {score}/{QuestionList.length}</span>
          </div>

        </div>
      </div>


    ) : (
      <div className=''>

        <div className='container col-lg-4 mt-5'>
          <div className='qa_box'>
            <div className='qa_header'>
              <span>Question:<span>{currentQuestion + 1} of {QuestionList.length}</span></span>

            </div>
            <div className='qa_body'>
              <div className='qa_set'>
                <h4> {QuestionList[currentQuestion].question} </h4>
                <div className='qa_ans_row'>
                  {QuestionList[currentQuestion].answerList.map((answerOption) => (
                    <Fragment key={uuidv4()}>
                      <button className={`answer-button ${clicked && answerOption.isCorrect ? "correct" : ""} `} onClick={() => handleCorrect(answerOption.isCorrect)}>
                        {answerOption.answer}
                      </button>


                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
            <br></br>
            <div className='qa_footer'>
              <button className='btn1' onClick={handleNextQuestion} disabled={!clicked}>Next</button>
            </div>
          </div>
        </div>
      </div>


    )}
    <br></br>

  </div>
  )
}

export default JavaQuiz