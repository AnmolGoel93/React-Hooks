import React, { useContext } from "react";
import example_context from "./example_context";

const CompC = () => {
  const context_value = useContext(example_context);
  return (
    <>
      <div>CompC</div>
      <div>Context Value - {context_value}</div>
    </>
  );
};

export default CompC;
