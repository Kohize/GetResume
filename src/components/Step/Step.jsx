import React from 'react';

export default function Step({ stepNumber, title, description }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="rounded-full w-20 h-20 bg-indigo-600 p-5 flex justify-center items-center
      mb-10">
        <span className="text-white font-bold text-2xl">{stepNumber}</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-bold text-lg text-gray-950 mb-3 dark:text-white">
          {title}
        </h3>
        <p className=" text-sm text-gray-600 text-center dark:text-zinc-200">
          {description}
        </p>
      </div>
    </div>
  );
}
