import React from 'react';

export default function Button({ children }) {
  return (
    <button className="p-3 font-semibold bg-indigo-600 text-zinc-50 rounded-lg hover:opacity-90 cursor-pointer">
      {children}
    </button>
  );
}
