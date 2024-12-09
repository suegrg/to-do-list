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

export default Task;