import React from "react";

function Modal({ children, isOpen }) {
  if (!isOpen) return null;
  return React.createElement("div", null, children);
}

Modal.setAppElement = () => {};

export default Modal;
