import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showTaskInput, setShowTaskInput] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setShowTaskInput(false); // Hide the task input form after adding a task
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={() => setShowTaskInput(true)}>Add Task</button>
      {showTaskInput && <TaskInput addTask={addTask} />}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

import React from 'react';
import Task from './Task';

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
}

export { TaskList };

import React, { useState } from 'react';

function Task({ task }) {
  const [completed, setCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <p style={{ textDecoration: completed ? 'line-through' : 'none', color: completed ? 'green' : 'black' }}>
        {task.taskName} - {task.date} at {task.time}
      </p>
    </div>
  );
}

export { Task };

import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    if (taskName && date && time) {
      addTask({ taskName, date, time });
      setTaskName('');
      setDate('');
      setTime('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}

export { TaskInput };

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
