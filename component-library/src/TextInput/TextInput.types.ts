import type React from 'react';

export interface TextInputProps {
  label: string;
  value: string;
  error?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
