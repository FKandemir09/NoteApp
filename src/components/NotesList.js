import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

export default function NotesList({ notes, handleAddNote, handleRemoveNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          text={note.text}
          date={note.date}
          id={note.id}
          handleRemoveNote={handleRemoveNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}
