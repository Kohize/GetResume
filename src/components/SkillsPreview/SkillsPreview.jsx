import React from 'react';
import { useSelector } from 'react-redux';
import { skills } from '../../utils/Skills';
import { nanoid } from '@reduxjs/toolkit';

export default function SkillsPreview() {
  const resumeData = useSelector((state) => state.initialResumeData);
  const { job } = resumeData;

  const renderSkills = () => {
    switch (job) {
      case 'Software Developer':
        return skills.softwareDeveloper;
      case 'Front-End Developer':
        return skills.frontEndDeveloper;
      case 'Web Developer':
        return skills.webDeveloper;
      case 'Back-End Developer':
        return skills.backEndDeveloper;
      case 'Full-Stack Developer':
        return skills.fullStackDeveloper;
      case 'Mobile Developer':
        return skills.mobileDeveloper;
      case 'UI Designer':
        return skills.uiDesigner;
      case 'Game Developer':
        return skills.gameDeveloper;
      case 'Data Scientist':
        return skills.dataScientsist;
    }
  };

  const currentSkills = renderSkills();
  return (
    <div className="border-b-1 border-gray-300 p-3">
      <h3 className=" font-semibold text-gray-400 uppercase mb-3">Skills</h3>
      <div>
        <ul className="flex flex-wrap gap-4">
          {currentSkills.map((item) => (
            <li key={nanoid()} className="rounded-md p-1 text-xs border-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
