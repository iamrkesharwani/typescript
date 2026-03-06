import type React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}
