'use client';

import React from 'react';

export default function ChatPage({ params }: { params: { chatId: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Chat {params.chatId}</h1>
        {/* Chat interface will be implemented later */}
      </div>
    </div>
  );
} 