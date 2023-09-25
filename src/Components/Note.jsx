import React from "react";

function Note(props) {
    function HandleClick(event) {
        props.delete(props.index);
    }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={HandleClick}>DELETE</button>
    </div>
  );
}

export default Note;
