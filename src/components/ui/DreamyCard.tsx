
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface DreamyCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'floating' | 'highlight';
}

export const DreamyCard: React.FC<DreamyCardProps> = ({
  children,
  className,
  variant = 'default',
}) => {
  const baseClasses = 'glass-card p-6';
  
  const variantClasses = {
    default: '',
    floating: 'animate-float',
    highlight: 'border-accent/40 bg-accent/10',
  };
  
  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </div>
  );
};

interface DreamyButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const DreamyButton: React.FC<DreamyButtonProps> = ({
  children,
  onClick,
  className,
  variant = 'primary',
  disabled = false,
  type = 'button',
}) => {
  const variantClasses = {
    primary: 'dreamy-btn-primary',
    secondary: 'dreamy-btn-secondary',
    accent: 'dreamy-btn-accent',
    outline: 'dreamy-btn border border-primary/50 text-primary hover:bg-primary/10',
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        variantClasses[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  );
};

interface DreamyInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  name?: string;
  id?: string;
}

export const DreamyInput: React.FC<DreamyInputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
  required = false,
  name,
  id,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      name={name}
      id={id}
      className={cn('dreamy-input', className)}
    />
  );
};

interface DreamyTextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  required?: boolean;
  name?: string;
  id?: string;
  rows?: number;
}

export const DreamyTextarea: React.FC<DreamyTextareaProps> = ({
  placeholder,
  value,
  onChange,
  className,
  required = false,
  name,
  id,
  rows = 4,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      name={name}
      id={id}
      rows={rows}
      className={cn('dreamy-input resize-none', className)}
    />
  );
};
