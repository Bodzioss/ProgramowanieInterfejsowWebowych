import React from 'react';

import "../App.js"


const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      className="button-85"
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </button>
  );
};
export default Trigger;
