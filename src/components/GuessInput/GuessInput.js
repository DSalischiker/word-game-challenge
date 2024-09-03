import React, { useState } from 'react';

function GuessInput({ tries, setTries, guessesList, setGuessesList, gameOver}) {
  const [input, setInput] = useState("");

  const submitInput = (e) => {
    e.preventDefault();
    const nextGuessesList = [...guessesList];
    nextGuessesList.push(input);
    setGuessesList(nextGuessesList);
    const nextTries = tries + 1;
    setTries(nextTries);
    setInput("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={submitInput}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        onChange={(e) => { setInput(e.target.value.toUpperCase()) }}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={gameOver}
      />
    </form>
  );
}

export default GuessInput;
