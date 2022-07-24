import { useState } from "react";
import AllStudent from "./components/AllStudent";
import Form from "./components/Form";

function App() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNotes, setEditableNotes] = useState(null);
  return (
    <div className="App">
      <Form
        title={title}
        notes={notes}
        editMode={editMode}
        editableNotes={editableNotes}
        setTitle={setTitle}
        setNotes={setNotes}
        setEditMode={setEditMode}
        setEditableNotes={setEditableNotes}
      />
      <AllStudent
        title={title}
        notes={notes}
        editMode={editMode}
        editableNotes={editableNotes}
        setTitle={setTitle}
        setNotes={setNotes}
        setEditMode={setEditMode}
        setEditableNotes={setEditableNotes}
      />
    </div>
  );
}

export default App;
