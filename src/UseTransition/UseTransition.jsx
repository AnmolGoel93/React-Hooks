import React, { useState, useTransition } from "react";

const UseTransition = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 20000;

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);

    startTransition(() => {
      const listItems = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        listItems.push(e.target.value);
      }

      setList(listItems);
    });
  };

  return (
    <>
      <h2>useTransition Hook</h2>
      <input
        type="text"
        onChange={inputChangeHandler}
        value={inputValue}
      ></input>
      {isPending
        ? "Loading..."
        : list.map((item, index) => <div key={index}>{item}</div>)}
    </>
  );
};

export default UseTransition;
