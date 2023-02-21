import React from 'react';

const Calculator = () => (
  <div className="container">
    <form>
      <input type="text" value="" placeholder="0" />
    </form>
    <div className="keypad">
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className="highlight">&divide;</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="highlight">&times;</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button" className="highlight">&ndash;</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className="highlight">+</button>
      <button type="button" id="zero">0</button>
      <button type="button">.</button>
      <button type="button" className="highlight">=</button>
    </div>
  </div>
);

export default Calculator;
