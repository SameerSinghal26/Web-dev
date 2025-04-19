import React, { useEffect } from 'react';

const Card = () => {
  useEffect(() => {
    // effect
    return () => {
      // cleanup
    };
  }, []);

  return (
    <div>
      /* content */
    </div>
  );
};

export default Card;