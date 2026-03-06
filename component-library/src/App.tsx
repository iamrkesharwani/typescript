import { useState } from 'react';
import Button from './Button/Button';
import StatusBadge from './StatusBadge/StatusBadge';
import TextInput from './TextInput/TextInput';

const App = () => {
  const [name, setName] = useState('');
  return (
    <>
      <TextInput
        label="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button variant="primary" size="md" onClick={() => alert('Clicked')}>
        Save
      </Button>

      <StatusBadge status="todo" />
    </>
  );
};

export default App;
