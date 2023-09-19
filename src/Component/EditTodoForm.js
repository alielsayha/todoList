import { useState } from "react";

const EditTodoForm = ({editing , task}) => {
  const [value , setValue ] = useState(task.value)
  const handelSubmit = (e)=>{
    e.preventDefault();
    editing(value, task.id)
  } 
  return (
    <form className="TodoForm" onSubmit={handelSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the Update ?"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Todo
      </button>
    </form>
  );
};

export default EditTodoForm;
