function Form(props) {
  const createNotesHandler = (event) => {
    event.preventDefault();
    if (props.title) {
      const newTitle = {
        id: Date.now(),
        title: props.title,
        isComplete:false,
      };
      props.setNotes([...props.notes,newTitle]);
      props.setTitle('');
     
    } else {
      alert("please give a title ");
    }
  };
  const createUpdateHandler = (event) => {
    event.preventDefault();
    if (props.title) {
      props.setNotes(
        props.notes.map((item) => {
          if (item.id === props.editableNotes.id) {
            item.title = props.title;
          }
          return item;
        })
      );
      props.setTitle('');
      props.editableNotes(null);
      props.setEditMode(false)
    } else {
      alert("please give a title ");
    }
  };
  return (
    <form
      onSubmit={(event)=> props.editMode? createUpdateHandler(event):createNotesHandler(event)}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <input
        onChange={(event) => props.setTitle(event.target.value)}
        value={props.title}
        type="text"
        placeholder="Type a valid Note Name"
      />
      <button type="submit">{props.editMode?"Update Note":"Add Notes"}</button>
    </form>
  );
}

export default Form;