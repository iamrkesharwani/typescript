type TaskStatus = 'todo' | 'in-progress' | 'done';

interface StatusBadgeProps {
  status: TaskStatus;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const colors = {
    todo: 'gray',
    'in-progress': 'blue',
    done: 'green',
  };
  return <span style={{ backgroundColor: colors[status] }}>{status}</span>;
};

export default StatusBadge;
