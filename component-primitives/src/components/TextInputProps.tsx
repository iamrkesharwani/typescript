import React from 'react';

interface TextInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  error?: string;
}

const TextInput = ({ value, onChange, label, error }: TextInputProps) => {
  return (
    <div>
      <label className="label">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={error ? 'input-error' : 'input-standard'}
      />
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default TextInput;
