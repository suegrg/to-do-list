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

export default TaskInput;