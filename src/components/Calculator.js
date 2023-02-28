import React from 'react';
import Button from './Button';

const Calculator = () => {
  const styles = {
    h1: {
        fontSize: "28px",
        fontWeight: "bold"
    },
};
  return (
    <div>
    <h1 className='h1' style={styles.h1}>Math Magicians</h1>
    <h2>Let's do some math!</h2>
    <Button />
  </div>
  )

  };

export default Calculator;
