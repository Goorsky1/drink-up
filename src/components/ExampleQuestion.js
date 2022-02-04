import React from 'react';

function ExampleQuestion() {
  return (
    <>
      <h1>How do you like your beer?</h1>
      <div className="question">
        <button className="btn">Dark</button>
        <button className="btn">Light</button>
        <button className="btn">Fancy color</button>
        <button className="btn">Don't care</button>
      </div>
    </>
  );
}

export default ExampleQuestion;
