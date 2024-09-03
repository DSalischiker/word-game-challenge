import React from 'react';
import {checkGuess} from '../../game-helpers';


function Guess({answer, guess, setGameOver, setGameStatus, tries}) {
  let checkResult = [];
  if (guess != undefined) {
    console.log('TRIES', tries);
    checkResult = checkGuess(guess, answer);
    console.log(checkResult)
    if (answer === guess) {
      setGameOver(true);
      setGameStatus("win");
    } else if (tries === 6) {
      setGameOver(true);
      setGameStatus("lose");
    }
  }
  return (
      <p className="guess">
        {guess != undefined || '' ? [...guess].map((item, index) => {          
          return (
            <span key={crypto.randomUUID()} className={`cell ${checkResult[index]?.status}`}>{item}</span>
          )
        }) : 
          <>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
          </>
        }
      </p>
  );
}

export default Guess;
