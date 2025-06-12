import React from 'react';
import emailIcon from '../../assets/email-svgrepo-com.svg';
import githubIcon from '../../assets/github-mark.svg';
import linkedInIcon from '../../assets/icons8-linkedin.svg';

export default function ContactsPreview() {
  return (
    <div className="p-3 flex flex-col border-b-1 border-gray-300 text-sm justify-center">
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
  );
}
