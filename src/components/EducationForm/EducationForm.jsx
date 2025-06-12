import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addEducation,
  removeEducation,
} from '../../features/ResumePreview/ResumeSlice';
import EducationInput from '../EducationInput/EducationInput';

export default function EducationForm() {
  const dispatch = useDispatch();
  const educationData = useSelector(
    (state) => state.initialResumeData.education
  );
  console.log(educationData);

  return (
    <div>
      <div className="flex flex-col gap-x-5 gap-y-5 py-5 dark:text-white">
        {educationData.map((item) => (
          <div key={item.id} className="border-b-1 border-gray-900 py-5">
            <div className="flex justify-between">
              <h3>Education</h3>
              <button
                onClick={() => dispatch(removeEducation(item.id))}
                className="bg-rose-600 text-white cursor-pointer text-sm rounded-md p-1 hover:opacity-80 hover:text-gray-500">
                Remove
              </button>
            </div>
            <EducationInput name={'institution'} type={'text'} id={item.id}>
              Institution
            </EducationInput>
            <EducationInput name={'course'} type={'text'} id={item.id}>
              Course
            </EducationInput>
            <EducationInput name={'gpa'} type={'text'} id={item.id}>
              GPA
            </EducationInput>
            <EducationInput name={'degree'} type={'number'} id={item.id}>
              Year of Degree
            </EducationInput>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-x-5">
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(addEducation());
          }}
          className="bg-indigo-600 text-white py-2 px-3 rounded-md cursor-pointer hover:opacity-70">
          +
        </button>
        <p className="font-sm dark:text-white">Add Education</p>
      </div>
    </div>
  );
}
