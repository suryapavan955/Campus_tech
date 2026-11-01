import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}
export function Button({ variant = 'primary', className = '', type = 'button', ...props }: ButtonProps) {
  const variantClass = variant === 'primary' ? 'button-primary' : 'button-outline';
  return <button type={type} className={`button ${variantClass} ${className}`} {...props} />;
}
