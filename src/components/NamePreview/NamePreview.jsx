import React from 'react';
import { useSelector } from 'react-redux';

export default function NamePreview() {
  const resumeData = useSelector((state) => state.initialResumeData);
  const { firstName, secondName, job } = resumeData;
  return (
    <div className="p-3 border-b-1 border-gray-300">
      <h3 className="font-semibold text-3xl">{firstName}</h3>
      <h3 className="font-semibold text-3xl mb-3">{secondName}</h3>
      <p className="text-xs text-zinc-600 uppercase">{job}</p>
    </div>
  );
}
