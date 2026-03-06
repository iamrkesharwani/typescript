import type { StatusBadgeProps } from './StatusBadge.types';

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return <span>{status}</span>;
};

export default StatusBadge;
