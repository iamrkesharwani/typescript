import type { TextInputProps } from './TextInput.types';

const TextInput = ({ label, value, onChange, error }: TextInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={onChange} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default TextInput;
