import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [updatedValue, setUpdatedValue] = useState("Initial Value");

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <h2>useEffect Hook</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setUpdatedValue("Hi! Value Updated")}>
        Some Other Value
      </button>
      <div>{count}</div>
      <div>{updatedValue}</div>
    </>
  );
};

export default UseEffect;
