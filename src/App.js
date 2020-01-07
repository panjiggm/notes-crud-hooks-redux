import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Notes from "./components/Notes";
import Form from "./components/Form";
import {
  createNote,
  updateNote,
  deleteNote
} from "./store/actions/notesAction";

function App({ items, createNote, updateNote, deleteNote }) {
  const [mode, setMode] = useState("create");
  const [formItem, setFormItem] = useState({ title: "", note: "" });

  const handleInputChange = (name, value) => {
    setFormItem({ ...formItem, [name]: value });
  };

  const handleCreate = () => {
    const { title, note } = formItem;

    const newItems = {
      id: items.length + 1,
      title: title,
      note: note
    };

    createNote(newItems);

    setFormItem({ title: "", note: "" });
  };

  const handleUpdate = () => {
    const index = items.findIndex(item => item.id === formItem.id);
    let updateItem = [...items];
    updateItem[index] = formItem;

    setMode("create");
    updateNote(updateItem);
    setFormItem({ title: "", note: "" });
  };

  const handleEdit = index => {
    setMode("edit");
    setFormItem(items[index]);
  };

  const handleDelete = id => {
    deleteNote(id);
  };

  return (
    <Fragment>
      <h1 className="text-center">Notes App</h1>
      <Form
        mode={mode}
        item={formItem}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onHandleChange={handleInputChange}
      />

      <br />

      <Notes items={items} onEdit={handleEdit} onDelete={handleDelete} />
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    items: state.notes
  };
};

export default connect(mapStateToProps, { createNote, updateNote, deleteNote })(
  App
);
