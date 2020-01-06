import React from "react";

const Form = ({ mode, item, onCreate, onUpdate, onHandleChange }) => {
  const handleSubmit = e => {
    e.preventDefault();

    mode === "create" ? onCreate() : onUpdate();
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" />
        <input
          type="text"
          value={item.title}
          onChange={e => onHandleChange("title", e.target.value)}
          placeholder="title"
        />

        <label htmlFor="note" />
        <textarea
          type="text"
          value={item.note}
          onChange={e => onHandleChange("note", e.target.value)}
          placeholder="Silahkan isi Note..."
        />

        <button>{mode === "create" ? "Add" : "Save"}</button>
      </form>
    </div>
  );
};

export default Form;
