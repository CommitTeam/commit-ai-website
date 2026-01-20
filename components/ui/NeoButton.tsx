
import React from 'react';
import { motion } from 'framer-motion';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'black' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  pill?: boolean;
}

export const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  pill = true,
  className = '',
  ...props 
}) => {
  const baseStyles = `font-bold border-2 border-black transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center justify-center gap-2`;
  
  const variants = {
    primary: "bg-brand-yellow text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
    secondary: "bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-50",
    black: "bg-black text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] hover:bg-gray-900",
    outline: "bg-transparent text-black border-gray-200 hover:border-black",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-lg",
  };

  const rounded = pill ? "rounded-full" : "rounded-xl";

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${rounded}
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};
