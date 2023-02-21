import React from 'react';
import Content from './Content';

const Calculator = () => (
  <div className="container">
    <form>
      <input type="text" value="" placeholder="0" />
    </form>
    <Content />
  </div>
);

export default Calculator;
