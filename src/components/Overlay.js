import React from "react";
export const Overlay = ({ cancelledMessage }) => {
  return (
    <div id="overlay">
      <span className="o-text">{cancelledMessage}</span>
    </div>
  );
};
