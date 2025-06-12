import React from 'react';
import { useSelector } from 'react-redux';

export default function SummaryPreview() {
  const resumeData = useSelector((state) => state.initialResumeData);
  const { summary } = resumeData;
  return (
    <div className="p-3 border-b-1 border-gray-300">
      <h3 className="font-semibold text-gray-400 uppercase">Profile Summary</h3>
      <p className="text-xs max-w-60">{summary}</p>
    </div>
  );
}
