import React from 'react';
import Input from '../../components/Input/Input';
import EducationForm from '../../components/EducationForm/EducationForm';
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm';

export default function Form() {
  return (
    <form className="flex flex-col p-10 gap-y-5">
      <Input html={'firstName'} type={'text'} fieldType={'input'}>
        First Name
      </Input>
      <Input html={'secondName'} type={'text'} fieldType={'input'}>
        Second Name
      </Input>
      <Input html={'summary'} type={'text'} fieldType={'textarea'}>
        Summary
      </Input>
      <Input html={'job'} type={'text'} fieldType={'select'}>
        Select a Profession
      </Input>
      <label htmlFor="profession"></label>
      <EducationForm />
      <ExperienceForm />
    </form>
  );
}
