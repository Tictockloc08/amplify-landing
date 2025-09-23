import React from 'react';
import Image from 'next/image';

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
      {/* Logo Icon - Using your actual PNG logo */}
      <div className={`${sizeClasses[size]} relative`}>
        <Image
          src="/amplify-logo.png"
          alt="AMPLIFY Digital Marketing Logo"
          fill
          className="object-contain"
        />
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