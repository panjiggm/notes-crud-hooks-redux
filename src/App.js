import React, { useState } from "react";
import Notes from "./components/Notes";
import Form from "./components/Form";
import initialState from "./components/notesData";

function App() {
  const [items, setItems] = useState(initialState);
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

    setItems([...items, newItems]);
    setFormItem({ title: "", note: "" });
  };

  const handleUpdate = () => {
    const index = items.findIndex(item => item.id === formItem.id);
    const updateItem = [...items];
    updateItem[index] = formItem;

    setMode("create");
    setItems(updateItem);
    setFormItem({ title: "", note: "" });
  };

  const handleEdit = index => {
    setMode("edit");
    setFormItem(items[index]);
  };

  const handleDelete = id => {
    const newItems = items.filter(item => item.id !== id);

    setItems(newItems);
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
