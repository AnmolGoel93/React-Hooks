import React, { useState } from "react";
import List from "./List";

const UseDeferredValue = () => {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h2>useDeferredValue Hook</h2>
      <input
        type="text"
        onChange={inputChangeHandler}
        value={inputValue}
      ></input>
      <List input={inputValue} />
    </>
  );
};

export default UseDeferredValue;
