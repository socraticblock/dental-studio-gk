import React from 'react';

interface ImagePlaceholderProps {
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ className = "" }) => {
  return (
    <div className={`bg-black w-full h-full flex items-center justify-center ${className}`}>
      <span className="text-white font-bold uppercase tracking-widest text-2xl">
        PLACEHOLDER
      </span>
    </div>
  );
};

export default ImagePlaceholder;
