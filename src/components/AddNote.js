import React, { useState } from "react";

export default function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");

  const charLimit = 200;

  function handleChange(e) {
    const text = e.target.value;
    if (charLimit - text.length >= 0) {
      setNoteText(text);
    }
  }

  function handleSaveClick() {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  }

  return (
    <div className="note new">
      <textarea
        className="text-area"
        cols="8"
        rows="10"
        value={noteText}
        placeholder="Type to add note"
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
