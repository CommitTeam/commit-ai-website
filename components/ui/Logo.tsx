
import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showTagline = false, size = 'md' }) => {
  const sizes = {
    sm: { height: 'h-8', tagline: 'text-[10px]', taglineSpacing: 'mt-0.5' },
    md: { height: 'h-12', tagline: 'text-[13px]', taglineSpacing: 'mt-1' },
    lg: { height: 'h-20', tagline: 'text-lg', taglineSpacing: 'mt-1.5' },
    xl: { height: 'h-24 md:h-32', tagline: 'text-[22px]', taglineSpacing: 'mt-2' },
  };

  const current = sizes[size];

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <img
        src="/ComoLogo.png"
        alt="COMO"
        className={`${current.height} w-auto object-contain`}
      />
      {showTagline && (
        <p className={`font-semibold text-[#3D3935] tracking-tight ${current.taglineSpacing} ${current.tagline}`}>
          You vs. Who?
        </p>
      )}
    </div>
  );
};
