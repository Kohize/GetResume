import React from 'react';
import { useSelector } from 'react-redux';
import graduateIcon from '../../../public/graduation-hat-svgrepo-com.svg';
import emailIcon from '../../../public/email-svgrepo-com.svg';
import githubIcon from '../../../public/github-mark.svg';
import linkedInIcon from '../../../public/icons8-linkedin.svg';

export default function ResumePreview() {
  const resumeData = useSelector((state) => state.initialResumeData);
  const { firstName, secondName, job, summary, education } = resumeData;

  return (
    <section className="bg-white rounded-lg grid grid-cols-2 grid-rows-[auto_auto_1fr]">
      <div className="p-5 border-b-1 border-gray-300">
        <h3 className="font-semibold text-3xl">{firstName}</h3>
        <h3 className="font-semibold text-3xl mb-3">{secondName}</h3>
        <p className="text-xs text-zinc-600 uppercase">{job}</p>
      </div>
      <div className="p-5 flex flex-col border-b-1 border-gray-300 text-sm">
        <div className="flex items-center gap-x-1">
          <img src={githubIcon} alt="githubIcon" className="w-4 h-4" />
          <p>github.com/kohize</p>
        </div>
        <div className="flex items-center gap-x-1">
          <img src={emailIcon} alt="emailIcon" className="w-4 h-4" />
          <p>created@mail.com</p>
        </div>
        <div className="flex items-center gap-x-1">
          <img src={linkedInIcon} alt="linkedInIcon" className="w-4 h-4" />
          <p>linked.in/kohize</p>
        </div>
      </div>
      <div className="p-5 border-b-1 border-gray-300">
        <h3 className="font-semibold text-gray-400 uppercase">
          Profile Summary
        </h3>
        <p className="text-sm">{summary}</p>
      </div>
      <div className="p-5 border-b-1 border-gray-300">
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
      <div>
        <h3>Professional Experience</h3>
        <h4></h4>
        <p></p>
      </div>
    </section>
  );
}
