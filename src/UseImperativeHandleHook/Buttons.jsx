import React, { useRef, useState } from "react";
import Modal from "./Modal";
import "./Buttons.css";

const Buttons = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  return (
    <>
      <h2>useImperativeHandle Hook</h2>
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => modalRef.current.focusClose()}>Focus Close</button>
      <button onClick={() => modalRef.current.focusConfirm()}>
        Focus Confirm
      </button>
      <button onClick={() => modalRef.current.focusDeny()}>Focus Deny</button>

      {open && <Modal ref={modalRef} onClose={() => setOpen(false)} />}
    </>
  );
};

export default Buttons;
