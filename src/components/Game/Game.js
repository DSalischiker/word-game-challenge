import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessesList from '../GuessesList';
import Guess from '../Guess';

import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {range} from '../../utils';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesList, setGuessesList] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameStatus, setGameStatus] = useState('');
  const [tries, setTries] = useState(0);
  
  return (
    <>
      {gameOver ? 
        <>
          {gameStatus == "win" ? 
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in <strong>{tries} guesses</strong>.
            </p>
          </div> :
          <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          </div>
          }
        </> : <></>
      }
      {/* <GuessesList guessesList={guessesList} /> */}
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((item, index) => {
          return (
            <Guess
              key={crypto.randomUUID()}
              answer={answer}
              guess={guessesList[index]}
              setGameOver={setGameOver}
              setGameStatus={setGameStatus}
              tries={tries}
            />
          )
        })}
      </div>
      <GuessInput
        tries={tries}
        setTries={setTries}
        guessesList={guessesList}
        setGuessesList={setGuessesList}
        gameOver={gameOver}
      />
    </>
  );
}

export default Game;
