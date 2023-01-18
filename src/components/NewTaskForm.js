import React from "react";
import  { useState } from "react";


function NewTaskForm({categories, onTaskFormSubmit }) {
  const categoryOptions = categories.map((category) => {
    return (
      <option key={category}>{category}</option>
    ) 
  })

  const [text, setText] = useState('')
  const [category, setCategory] = useState('Code')

  function handleSubmit(e) {
    e.preventDefault()

    const newTask= {
      text,
      category
    }
  onTaskFormSubmit(newTask)

    setText('')
    setCategory('Code')
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        
        <input 
        type="text"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        
          {/* render <option> elements for each category here */}
          <select 
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          >
            {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;