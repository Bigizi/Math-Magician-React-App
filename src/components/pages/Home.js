import React from 'react'

function Home() {
const styles = {
    main: {
        display: "flex",
        flexDirection: "column"
    },

    h1: {
        fontSize: "28px",
        fontWeight: "bold"
    },
};
  return (
    <div className='main' style={styles.main}>
      <h1 className='h1' style={styles.h1}>Math Magicians</h1>
      <h2>Welcome to our page!</h2>
      <p>A calculator is a device that performs arithmetic operations on numbers. Basic calculators can do only addition, subtraction, multiplication and division mathematical calculations.</p>
      <p>A calculator is a small electronic device that makes mathematical calculations. It’s used by students, financial advisors, accountants, and many others when mental math won’t produce a fast, accurate answer</p>
    </div>
  )
}

export default Home
