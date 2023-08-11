import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [countObj, dispatch] = useReducer(countReducer, initialState);

  return (
    <>
      <h2>useReducer Hook</h2>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "INCREMENT",
            })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "DECREMENT",
            })
          }
        >
          Decrement
        </button>
        <div>{countObj.count}</div>
      </div>
    </>
  );
};

export default UseReducer;
