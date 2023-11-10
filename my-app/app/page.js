"use client"

// components/Calendar.js
import React from 'react';

const CurrentDate = () => {
  const currentDate = new Date().toDateString();

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontSize: '2em', margin: 'auto' }}>{currentDate}</p>
    </div>
  );
};

export default CurrentDate;
