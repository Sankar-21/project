/* AlertBanner.js */
import React from 'react';

const AlertBanner = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-yellow-100 text-yellow-800 p-2 rounded mb-4">
      {message}
    </div>
  );
};

export default AlertBanner;
