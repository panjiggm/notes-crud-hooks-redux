import React from "react";

const Notes = ({ items, onEdit, onDelete }) => {
  return items.length === 0 ? (
    <div className="text-center">Takde Notes...</div>
  ) : (
    items.map(({ id, title, note }, index) => (
      <div key={id} className="card">
        <h4 className="card-title">{title}</h4>

        {note}

        <div className="card-button">
          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </div>
      </div>
    ))
  );
};

export default Notes;
