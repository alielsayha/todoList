import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Todo = ({task , completedTodo ,deleteTodo ,editTodo}) => {
  return (
    <div className="Todo">
      <p className={task.completed ? 'completed' : ""} onClick={()=>completedTodo(task.id)}>{task.value}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)}/>
      </div>
    </div>
  );
};

export default Todo;
