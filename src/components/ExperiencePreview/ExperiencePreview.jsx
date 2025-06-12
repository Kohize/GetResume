import React from 'react';
import { useSelector } from 'react-redux';

export default function ExperiencePreview() {
  const resumeData = useSelector((state) => state.initialResumeData);
  const { experience } = resumeData;
  return (
    <div className="p-3 border-b-1 border-gray-300 ">
      <h3 className="font-semibold text-gray-400 uppercase">
        Professional Experience
      </h3>
      {experience.map((item) => (
        <div key={item.id}>
          <div className="flex gap-x-2 items-center">
            <p>●</p>
            <h3 className="text-gray-500  text-sm">{item.title}</h3>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500 font-semibold">
                {item.company}
              </p>
              <p className="text-sm text-gray-500">
                {item.fromDate} - {item.toDate}
              </p>
            </div>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
