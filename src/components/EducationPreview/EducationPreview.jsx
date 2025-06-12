import React from 'react';
import { useSelector } from 'react-redux';
import graduateIcon from '../../assets/graduation-hat-svgrepo-com.svg';

export default function EducationPreview() {
  const resumeData = useSelector((state) => state.initialResumeData);
  const { education } = resumeData;
  return (
    <div className="border-b-1 border-gray-300 p-3 min-h-32">
      <h3 className="font-semibold text-gray-400 uppercase">Education</h3>
      {education.map((item) => (
        <div key={item.id} className="mb-2">
          <div className="flex items-center">
            <img src={graduateIcon} alt="graduate Icon" className="w-4 h-4" />
            <p className="text-sm">{item.institution}</p>
          </div>
          <p className="text-xs">
            {' '}
            {item.degree} years ({item.course})
          </p>
          <p className="text-xs font-semibold"> {item.gpa} GPA</p>
        </div>
      ))}
    </div>
  );
}
