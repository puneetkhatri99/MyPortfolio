import React, { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 w-5 h-5 bg-black rounded-full opacity-70 blur-sm transition-transform duration-75"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    />
  );
};

export default CursorFollower;