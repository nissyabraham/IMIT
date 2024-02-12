import React, { useState } from "react";
import "./Popup.css";
const Popupcomponent = ({ closemodal, onSubmit }) => {
  const [comment, setComment] = useState("");

  const [name, setName] = useState("");

  const handleSubmit = () => {
    onSubmit({ name, comment });
    setName("");
    setComment("");
  };

  return (
    <div
      className="modalbackground"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modalcontainer">
        <button className="titleclosebtn" onClick={() => closemodal(false)}>
          {" "}
          X{" "}
        </button>
        <div className="modal-title"></div>
        <div className="modal-body">
          <input
            className="modalinput"
            value={name}
            placeholder="Enter name"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="modalinput"
            value={comment}
            placeholder="write a comment...."
            type="text"
            name="image"
            accept="image/*"
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button className="cancelbutton" onClick={() => closemodal(false)}>
            cancel
          </button>
          <button className="submitbutton" onClick={handleSubmit}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popupcomponent;
