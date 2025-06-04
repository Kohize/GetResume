import React from 'react';

export default function Benefit({ icon, title, description, color }) {
  const iconBackgrounds = {
    lightblue: 'bg-blue-400',
    pink: 'bg-pink-400',
    green: 'bg-green-400',
  };

  return (
    <div className="bg-indigo-600 min-h-60 min-w-50 rounded-md py-10 px-5 hover:shadow-md :">
      <div
        className={`${iconBackgrounds[color]} max-w-15 min-h-15 rounded-2xl flex justify-center items-center mb-10`}>
        <span className="text-2xl">{icon}</span>
      </div>

      <h3 className="font-bold text-lg text-zinc-50 mb-2">{title}</h3>
      <p className="font-semibold text-sm text-gray-300">{description}</p>
    </div>
  );
}
