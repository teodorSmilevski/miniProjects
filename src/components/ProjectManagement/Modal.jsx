/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/50 p-4 rounded-xl shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <button className="text-lg bg-stone-800 text-stone-50 hover:bg-stone-950 py-2 px-7 rounded">
          Okay
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
