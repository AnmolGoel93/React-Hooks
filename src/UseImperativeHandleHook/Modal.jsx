import React, { useImperativeHandle, useRef } from "react";
import "./Buttons.css";

const Modal = ({ onClose }, ref) => {
  const closeRef = useRef();
  const confirmRef = useRef();
  const denyRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        focusClose: () => closeRef.current.focus(),
        focusConfirm: () => confirmRef.current.focus(),
        focusDeny: () => denyRef.current.focus(),
      };
    },
    []
  );

  return (
    <div ref={ref}>
      <button ref={closeRef} onClick={onClose}>
        &times;
      </button>
      <h2>Title</h2>
      <p>Do you confirm?</p>
      <div>
        <button ref={confirmRef}>Yes</button>
        <button ref={denyRef}>No</button>
      </div>
    </div>
  );
};

export default React.forwardRef(Modal);
