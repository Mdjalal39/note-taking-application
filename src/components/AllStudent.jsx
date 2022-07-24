import React from "react";

function AllStudent(props) {
  const createDeleteHandler = (noteId)=> {
    props.setNotes(props.notes.filter((item)=> item.id!== noteId))
  }
  const createEditHandler = (noteId) => {
    const toBeEditableNotes = props.notes.find((item) => item.id === noteId);
    props.setEditMode(true);
    props.setTitle(toBeEditableNotes.title);
    props.setEditableNotes(toBeEditableNotes)
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className="all-student"
    >
      <ul>
        {props.notes.map((item) => (
          <li>
            <span>{item.title}</span>
            <button onClick={()=> createEditHandler(item.id)} >Edit</button>
            <button  onClick={()=> createDeleteHandler(item.id)} >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllStudent;
