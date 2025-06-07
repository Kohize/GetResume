import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setFirstName,
  setSecondName,
  setJob,
  setSummary,
} from '../../features/ResumePreview/ResumeSlice';

export default function Input({ html, type, children, fieldType }) {
  const dispatch = useDispatch();
  const PROFESSIONS = [
    'Web Developer',
    'Front-End Developer',
    'Back-End Developer',
    'Full-Stack Developer',
    'Mobile Developer',
    'UI Designer',
    'Game Developer',
    'Data Scientist',
  ];

  const ACTIONS = {
    firstName: setFirstName,
    secondName: setSecondName,
    job: setJob,
    summary: setSummary,
  };

  const handleOnChange = (e) => {
    const action = ACTIONS[html];
    if (action) {
      dispatch(action(e.target.value));
    }
  };

  const fieldVariants = {
    input: (
      <input
        type={type}
        onChange={handleOnChange}
        className="bg-zinc-300 rounded-md"
      />
    ),
    textarea: (
      <textarea
        name={html}
        onChange={handleOnChange}
        className="bg-zinc-300 rounded-md"></textarea>
    ),
    select: (
      <select
        name="profession"
        id="profession"
        onChange={handleOnChange}
        className="bg-zinc-300 rounded-md">
        {PROFESSIONS.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    ),
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={html} className="font-bold text-lg text-center ">
        {children}
      </label>
      {fieldVariants[fieldType] || null}
    </div>
  );
}
