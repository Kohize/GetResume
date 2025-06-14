import React from 'react';

export default function StandCard({ color, title, description, icon }) {
  const iconBackgrounds = {
    lightblue: 'bg-blue-400',
    pink: 'bg-pink-400',
    green: 'bg-green-400',
  };
  return (
    <div className="bg-indigo-600  rounded-md py-10 px-5 hover:shadow-md max-w-lg">
      <div className="flex items-center gap-x-3 mb-5">
        <div
          className={`${iconBackgrounds[color]} w-15 h-15 rounded-2xl flex justify-center items-center`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="font-bold text-lg text-zinc-50 mb-2">{title}</h3>
      </div>

      <p className="font-semibold text-sm text-gray-300">{description}</p>
    </div>
  );
}
