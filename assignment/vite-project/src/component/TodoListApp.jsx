import React, { useState } from "react";

const TodoListApp = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTaskInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((_, i) => i !== index)
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={handleTaskInputChange}
          placeholder="Enter a new task..."
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListApp;
