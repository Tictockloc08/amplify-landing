import React from 'react';

interface AmplifyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

const AmplifyLogo: React.FC<AmplifyLogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl', 
    xl: 'text-3xl'
  };

  const subTextSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Icon - Exact replica of your design */}
      <div className={`${sizeClasses[size]} relative`}>
        <svg 
          viewBox="0 0 24 16" 
          className="w-full h-full"
          fill="none"
        >
          <defs>
            <linearGradient id={`logoGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="100%" stopColor="#E91E63" />
            </linearGradient>
          </defs>
          
          {/* Outer chevron - larger, positioned to the right */}
          <path
            d="M2 4L6 2L6 4L10 2L10 4L14 2L14 4L18 2L18 4L22 2L22 4L24 4L22 6L22 8L18 6L18 8L14 6L14 8L10 6L10 8L6 6L6 8L2 6L2 4Z"
            fill={`url(#logoGradient-${size})`}
          />
          
          {/* Inner chevron - smaller, positioned to the left */}
          <path
            d="M4 6L6 5L6 6L8 5L8 6L10 5L10 6L12 5L12 6L14 5L14 6L16 5L16 6L18 5L18 6L20 5L20 6L22 5L22 6L24 6L22 7L22 8L20 7L20 8L18 7L18 8L16 7L16 8L14 7L14 8L12 7L12 8L10 7L10 8L8 7L8 8L6 7L6 8L4 7L4 6Z"
            fill={`url(#logoGradient-${size})`}
          />
        </svg>
      </div>
      
      {/* Text */}
      {showText && (
        <div className="ml-3">
          <div className={`font-bold uppercase ${textSizeClasses[size]} text-white leading-tight`}>
            AMPLIFY
          </div>
          <div className={`uppercase text-gray-300 ${subTextSizeClasses[size]} leading-tight`}>
            DIGITAL MARKETING
          </div>
        </div>
      )}
    </div>
  );
};

export default AmplifyLogo;