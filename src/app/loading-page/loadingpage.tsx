import React, { useState, useEffect } from 'react';
import './styles.css';

interface LoadingPageProps {
  onLoadingComplete: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          setIsZooming(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 1000);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-all duration-1000 ${isZooming ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}>
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
        <div className="text-white text-6xl font-mono mb-8 h-16 text-right">
        </div>
      </div>
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-mono">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;