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

  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative`}>
        {/* Outer chevron */}
        <div className="absolute inset-0">
          <svg 
            viewBox="0 0 24 24" 
            className="w-full h-full"
            fill="none"
          >
            <path
              d="M2 12L8 6L8 10L14 6L14 10L20 6L20 10L22 12L20 14L20 18L14 14L14 18L8 14L8 18L2 12Z"
              fill="url(#outerGradient)"
            />
          </svg>
        </div>
        
        {/* Inner chevron */}
        <div className="absolute inset-1">
          <svg 
            viewBox="0 0 24 24" 
            className="w-full h-full"
            fill="none"
          >
            <path
              d="M4 12L8 8L8 10L12 8L12 10L16 8L16 10L18 12L16 14L16 16L12 14L12 16L8 14L8 16L4 12Z"
              fill="url(#innerGradient)"
            />
          </svg>
        </div>
        
        {/* Gradient definitions */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="100%" stopColor="#E91E63" />
            </linearGradient>
            <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF8A65" />
              <stop offset="100%" stopColor="#F06292" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Text */}
      {showText && (
        <div className="ml-3">
          <div className={`font-bold uppercase ${textSizeClasses[size]} text-white`}>
            AMPLIFY
          </div>
          <div className={`text-xs uppercase text-gray-300 ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'}`}>
            DIGITAL MARKETING
          </div>
        </div>
      )}
    </div>
  );
};

export default AmplifyLogo;
