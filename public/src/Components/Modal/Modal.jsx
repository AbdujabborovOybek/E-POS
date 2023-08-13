import React, { memo } from "react";
import "./Modal.css";

export const Modal = memo(({ children, open }) => {
  return (
    <div className="modal">
      <div className="modal_card">
        <div className="modal_card_header">
          <h1>Modal</h1>
          <button>
            <i>X</i>
          </button>
        </div>
      </div>
    </div>
  );
});
