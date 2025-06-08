import React from 'react';
import { useDispatch } from 'react-redux';
import { setEducation } from '../../features/ResumePreview/ResumeSlice';

export default function EducationInput({ name, type, children, id }) {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(
      setEducation({
        id: id,
        field: name,
        value: e.target.value,
      })
    );
  };

  return (
    <div className="flex flex-col ">
      <label htmlFor={name} className="font-bold text-lg">
        {children}
      </label>
      <input
        type={type}
        onChange={handleOnChange}
        className="bg-zinc-300 rounded-md"
      />
    </div>
  );
}
