import React from "react";

const Notes = ({ items, onEdit, onDelete }) => {
  console.log(items);
  return items.length ? (
    items.map(({ id, title, note }, index) => (
      <div key={id} className="card">
        <h4 className="card-title">{title}</h4>

        {note}

        <div className="card-button">
          <button onClick={() => onDelete(id)}>Delete</button>
          <button onClick={() => onEdit(index)}>Edit</button>
        </div>
      </div>
    ))
  ) : (
    <div className="text-center">Takde Notes...</div>
  );
};

export default Notes;
