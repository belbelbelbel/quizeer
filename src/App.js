import { useState } from 'react';
import './App.css';

function App() {
  const [show, setshow] = useState(false)
  const [score, setscore] = useState(0)
  const [currentscore, setcurrrentscore] = useState(0);

  const questions = [
    {
      text: "What is the capital of Nigeria?",
      options: [
        { id: 0, text: "ADAMAWA", isCorrect: false },
        { id: 1, text: "ANAMBRA", isCorrect: false },
        { id: 2, text: "KADUNA", isCorrect: false },
        { id: 3, text: "FCT ABUJA", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of NIGERIA written?",
      options: [
        { id: 0, text: "1997", isCorrect: false},
        { id: 1, text: "1998", isCorrect: false },
        { id: 2, text: "1999", isCorrect: true },
        { id: 3, text: "1995", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the Nigeria?",
      options: [
        { id: 0, text: "NNAMDI AZIKIWE", isCorrect: false },
        { id: 1, text: "JOHNSON AGUIYI-IRONSI", isCorrect: true },
        { id: 2, text: "MURTALA MUHAMMED", isCorrect: false },
        { id: 3, text: "YAKUBU GUWON", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the Nigeria?",
      options: [
        { id: 0, text: "ANAMBRA", isCorrect: false },
        { id: 1, text: "NIGER", isCorrect: true },
        { id: 2, text: "KANO", isCorrect: false },
        { id: 3, text: "KADUNA", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border Nigeria ?",
      options: [
        { id: 0, text: "NIGER", isCorrect: false },
        { id: 1, text: "EGYPT", isCorrect: true },
        { id: 2, text: "SOUTHAFRICA", isCorrect: true },
        { id: 3, text: "CHAD", isCorrect: false },
      ],
    },
  ];

const nextpage = (isCorrect) => {
  if(isCorrect) {
    setscore(score + 1)
  }
  if(currentscore + 1 < questions.length) {
    setcurrrentscore(currentscore + 1)
  }
  else {
    setshow(true);
  }
}
const restart = () => {
  setcurrrentscore(0)
  setscore(0)
  setshow(false)
}
  return (

    <div className="App">
      <h1>Nigeria Quiz</h1>
      <h2>Current score:{score}</h2>
      {show ? (<div className="final-results">
        <h1>Final Result</h1>
        <h2>{score} 0ut of {questions.length}  correct - ({(score/questions.length) * 100 }%)</h2>
        <button onClick={()=> restart()}>Restart Game</button>
      </div>) : (<div className="question-card">
        <h2>Question {currentscore + 1} out of {questions.length}</h2>
        <h3 className='question-text'>{questions[currentscore].text}</h3>

        <ul>
          {questions[currentscore].options.map((option,key) => (
            <li key={key} onClick={() => nextpage(option.isCorrect)}>{option.text}</li>
          ))}
        </ul>
      </div>)}



    </div>
  );
}

export default App;
