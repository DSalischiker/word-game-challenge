import React from 'react';

function GuessesList({guessesList}) {
  return (
    <div className="guess-results">
      {
        guessesList.map((item) => {
          return (
            <span
              key={crypto.randomUUID()}
              className="guess"
            >
              {item}
            </span>
          )
        })
      }
    </div>
  )
}

export default GuessesList;
