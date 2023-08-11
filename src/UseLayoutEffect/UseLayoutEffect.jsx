import React, { useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffect = () => {
  const [show, setShow] = useState(false);
  const buttonRef = useRef();
  const popupRef = useRef();

  useLayoutEffect(() => {
    if (popupRef.current == null || buttonRef.current == null) return;
    const { bottom } = buttonRef.current.getBoundingClientRect();
    popupRef.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <>
      <h2>useLayoutEffect Hook</h2>
      <button ref={buttonRef} onClick={() => setShow((prev) => !prev)}>
        Click Here
      </button>
      {show && (
        <div ref={popupRef} style={{ position: "absolute" }}>
          This is a Popup
        </div>
      )}
    </>
  );
};

export default UseLayoutEffect;
