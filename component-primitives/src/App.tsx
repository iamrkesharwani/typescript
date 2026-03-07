import React, { useState } from 'react';
import Button from './components/ButtonProps';
import Select from './components/SelectProps';
import StatusBadge from './components/StatusBadgeProps';
import TextInput from './components/TextInputProps';

type TaskStatus = 'todo' | 'in-progress' | 'done';

const App = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [status, setStatus] = useState<TaskStatus>('todo');

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button Clicked!', e.clientX);
  };
  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <h1>Task Manager Test</h1>

      <Button
        size="md"
        variant="danger"
        label="Danger"
        onClick={handleButtonClick}
      />

      <Select<TaskStatus>
        label="Change Status"
        value={status}
        onChange={(val) => setStatus(val)}
        options={[
          { label: 'To Do', value: 'todo' },
          { label: 'In Progress', value: 'in-progress' },
          { label: 'Done', value: 'done' },
        ]}
      />

      <StatusBadge status={status} />

      <TextInput
        label="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        error={taskTitle.length < 3 ? 'Title too short!' : undefined}
      />
    </div>
  );
};

export default App;
