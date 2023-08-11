import React, { useContext } from "react";
import example_context from "./example_context";

const CompE = () => {
  const context_value = useContext(example_context);
  return (
    <>
      <div>CompE</div>
      <div>Context Value - {context_value}</div>
    </>
  );
};

export default CompE;
