import React, { useState } from "react";
import "./Popup.css";
const Modalreply = ({ closemodal, onSubmit }) => {
  const [name, setName] = useState("");
  const [reply, setReply] = useState("");
  const replysubmithandler = () => {
    onSubmit({ name, reply });
    setReply("");
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
            value={reply}
            placeholder="Add reply..."
            type="text"
            name="reply"
            onChange={(e) => setReply(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button className="cancelbutton" onClick={() => closemodal(false)}>
            cancel
          </button>
          <button className="submitbutton" onClick={replysubmithandler}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalreply;
