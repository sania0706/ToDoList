import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTask] = useState([
    "drink water",
    "have breakfast",
    "take shower",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if(newTask.trim() !== ""){ 
    setTask(t => [...t , newTask]);
    setNewTask("");
    }
  }
  function removeTask(index) {
    const updatedtask = tasks.filter((_,i) => i !== index);
       setTask(updatedtask);

  }
  function moveTaskUp(index) {
    if(index > 0){
        const updatedtask = [...tasks];
        [updatedtask[index], updatedtask[index-1]] = [updatedtask[index-1], updatedtask[index]];
        setTask(updatedtask);
    }
  }
  function moveTaskDown(index) {
    if(index < tasks.length - 1){
        const updatedtask = [...tasks];
        [updatedtask[index], updatedtask[index+1]] = [updatedtask[index+1], updatedtask[index]];
        setTask(updatedtask);
    }
  }
  return (
    <div className="todolist">
      <h1>TO-DO-LIST</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a Task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button 
            className="delete-button" 
            onClick={() => removeTask(index)}>
              Delete
            </button>
            <button 
            className="move-button" 
            onClick={() => moveTaskUp(index)}>
              👆
            </button>
             <button 
            className="move-button" 
            onClick={() => moveTaskDown(index)}>
              👇
            </button>
            
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
