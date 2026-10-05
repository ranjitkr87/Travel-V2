import React, { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fallbackIcon?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  priority = false,
  fallbackIcon = 'landscape',
}) => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-secondary-container text-primary-container p-4 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="material-symbols-outlined text-[32px] mb-2" aria-hidden="true">
          {fallbackIcon}
        </span>
        <span className="font-label-sm text-label-sm line-clamp-2 max-w-[200px]">{alt}</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-surface-container-high">
      {!loaded && (
        <div
          className="absolute inset-0 bg-surface-container-high animate-pulse"
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        data-alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
