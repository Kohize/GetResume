import React from 'react';
import { useSelector } from 'react-redux';

export default function ResumePreview() {
  const resumeData = useSelector((state) => state.initialResumeData);
  const { firstName, secondName, job, summary } = resumeData;

  return (
    <section className="py-10 px-10 bg-white rounded-lg grid grid-cols-2">
      <div className="p-5">
        <h3 className="font-semibold text-3xl">{firstName}</h3>
        <h3 className="font-semibold text-3xl mb-3">{secondName}</h3>
        <p className="text-xs text-zinc-600 uppercase">{job}</p>
        <hr />
      </div>
      <div className="flex flex-col justify-center">
        <p>Github: github.com/kohize</p>
        <p>Mail: created@mail.com</p>
        <p>linked: linked.in/kohize</p>
      </div>
      <div className="p-5">
        <h3>Profile Summary</h3>
        <p>{summary}</p>
        <hr />
      </div>
      <div>
        <h3>Education</h3>
        <p></p>
        <p></p>
      </div>
      <div>
        <h3>Professional Experience</h3>
        <h4></h4>
        <p></p>
      </div>
    </section>
  );
}
