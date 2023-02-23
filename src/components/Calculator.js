import React, { useState } from 'react';
import calculate from '../logic/calculator';

const Calculator = () => (
  <Content />
);
const Content = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const show = () => calculate(state, e.target.name);
    setState(show);
  };

  let result;
  const { total, next, operation } = state;
  if (total === null && next === null && operation === null) {
    result = 0;
  }
  if (next !== null && total === null) {
    result = next;
  }

  if (next === null && total !== null && operation !== null) {
    result = total + operation;
  }
  if (next !== null && total !== null && operation !== null) {
    result = total + operation + next;
  }
  if (next === null && total !== null && operation === null) {
    result = total;
  }
  return (
    <div className="container">
      <form>
        <input type="text" value={result} placeholder="0" />
      </form>
      <div className="keypad">
        <button type="button" onClick={handleClick} name="AC">AC</button>
        <button type="button" onClick={handleClick} name="+/-">+/-</button>
        <button type="button" onClick={handleClick} name="%">%</button>
        <button type="button" className="highlight" onClick={handleClick} name="/">&divide;</button>
        <button type="button" onClick={handleClick} name="7">7</button>
        <button type="button" onClick={handleClick} name="8">8</button>
        <button type="button" onClick={handleClick} name="9">9</button>
        <button type="button" className="highlight" onClick={handleClick} name="*">&times;</button>
        <button type="button" onClick={handleClick} name="4">4</button>
        <button type="button" onClick={handleClick} name="5">5</button>
        <button type="button" onClick={handleClick} name="6">6</button>
        <button type="button" className="highlight" onClick={handleClick} name="-">&ndash;</button>
        <button type="button" onClick={handleClick} name="1">1</button>
        <button type="button" onClick={handleClick} name="2">2</button>
        <button type="button" onClick={handleClick} name="3">3</button>
        <button type="button" className="highlight" onClick={handleClick} name="+">+</button>
        <button type="button" id="zero" onClick={handleClick} name="0">0</button>
        <button type="button" onClick={handleClick} name=".">.</button>
        <button type="button" className="highlight" onClick={handleClick} name="=">=</button>
      </div>
    </div>
  );
};

export default Calculator;
