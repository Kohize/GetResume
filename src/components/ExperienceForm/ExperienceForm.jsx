import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExperienceInput from '../ExperienceInput/ExperienceInput';
import {
  addExperience,
  removeExperience,
} from '../../features/ResumePreview/ResumeSlice';

export default function ExperienceForm() {
  const experienceData = useSelector(
    (state) => state.initialResumeData.experience
  );
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-x-5 gap-y-5 dark:text-white">
      {experienceData.map((item) => (
        <div key={item.id}>
          <div className="flex justify-between">
            <h3>Job Experience</h3>
            <button
              onClick={() => dispatch(removeExperience(item.id))}
              className="bg-rose-600 text-white cursor-pointer text-sm rounded-md p-1 hover:opacity-80 hover:text-gray-500">
              Remove
            </button>
          </div>
          <ExperienceInput id={item.id} name={'title'} type={'input'}>
            {' '}
            Job Title:
          </ExperienceInput>
          <ExperienceInput id={item.id} name={'company'} type={'input'}>
            {' '}
            Company:
          </ExperienceInput>
          <p>Employment Dates:</p>
          <ExperienceInput id={item.id} name={'fromDate'} type={'month'}>
            From:
          </ExperienceInput>
          <ExperienceInput id={item.id} name={'toDate'} type={'month'}>
            To:
          </ExperienceInput>
          <ExperienceInput id={item.id} name={'description'} type={'input'}>
            Job Description:
          </ExperienceInput>
        </div>
      ))}
      <div className="flex items-center gap-x-5">
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(addExperience());
          }}
          className="bg-indigo-600 text-white py-2 px-3 rounded-md cursor-pointer hover:opacity-70">
          +
        </button>
        <p>Add Job Experience</p>
      </div>
    </div>
  );
}
