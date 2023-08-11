import React from "react";
import CompA from "./CompA";
import CompB from "./CompB";
import example_context from "./example_context";

const UseContext = () => {
  return (
    <>
      <example_context.Provider value="This is not the default context value">
        <h2>useContext Hook</h2>
        <CompA />
        <CompB />
      </example_context.Provider>
    </>
  );
};

export default UseContext;
