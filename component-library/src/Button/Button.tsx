import type { ButtonProps } from './Button.types';

const Button = ({ variant, size, onClick, children }: ButtonProps) => {
  return (
    <button data-variant={variant} data-size={size} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
