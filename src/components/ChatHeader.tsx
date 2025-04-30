'use client';

import React from 'react';

export default function ChatHeader() {
  return (
    <div className="bg-white border-b p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Chat Name</h2>
        <button className="text-gray-500 hover:text-gray-700">
          {/* Logout button will be implemented later */}
        </button>
      </div>
    </div>
  );
} 