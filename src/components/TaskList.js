import React from "react";
import Task from "./Task";

function TaskList({tasks, onRemove}) {
  
  const taskList = tasks.map( (task, index) => {
    return <Task key={index} text={task.text} category={task.category} index={index} onRemove={onRemove}/>
  });

  console.log(taskList);

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList}
    </div>
  );
}

export default TaskList;