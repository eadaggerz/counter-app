import React, { Fragment, useState, useEffect } from 'react'

function Main () {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prevCount => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <Fragment>
      <span className="text-center text-6xl">
        <h1>{counter}</h1>
      </span>
    </Fragment>
  );
}


export default Main;
