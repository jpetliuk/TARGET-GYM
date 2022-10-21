import React from "react";
import { useState } from "react";
import "./ModalTransition.css";

const ModalTransition = () => {
  const [isVisible, setIsVisible] = useState(true);
  setTimeout(() => {
    setIsVisible(false);
  }, 750);

  return isVisible === true ? <div className="modalWhiteScreen"></div> : null;
};

export default ModalTransition;
