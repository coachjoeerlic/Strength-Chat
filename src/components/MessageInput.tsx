'use client';

import React from 'react';

export default function MessageInput() {
  return (
    <div className="border-t p-4 bg-white">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
          Send
        </button>
      </div>
    </div>
  );
} 