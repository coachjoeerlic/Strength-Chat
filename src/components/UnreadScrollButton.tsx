'use client';

import React from 'react';

export default function UnreadScrollButton() {
  return (
    <button className="fixed bottom-20 right-4 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-primary/90">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </button>
  );
} 