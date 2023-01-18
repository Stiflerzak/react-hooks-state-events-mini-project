import React from "react";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [ category,setCategory] = useState("All")
  const[ tasks, setTasks] = useState(TASKS)

  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  )
  function handleDelete(deletedTaskText) {
    setTasks(tasks.filter(
      (task) => task.text !== deletedTaskText
    ))

  }


  function addTask(newTask) {
    const newTaskArray = [...tasks, newTask]
    setTasks(newTaskArray)

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategoryFilter={category}
      setSelectedCategoryFilter={setCategory}
      />
      <NewTaskForm 
      categories={CATEGORIES}
      onTaskSubmit={addTask}
      
      />
      <TaskList 
      tasks={visibleTasks}
      onDelete={handleDelete}
      />
    </div>
  );
}

export default App;