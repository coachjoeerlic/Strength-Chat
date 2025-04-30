'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from '@/lib/auth';

export default function ChatHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { error } = await signOut();
      if (error) throw error;
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="bg-white border-b p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Chat Name</h2>
        <button
          onClick={handleLogout}
          className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          Sign out
        </button>
      </div>
    </div>
  );
} 