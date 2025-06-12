import React from 'react';
import Step from '../../components/Step/Step';

export default function Steps() {
  return (
    <section className="p-20 bg-gray-200 dark:bg-gray-900 shadow-lg">
      <div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-semibold text-4xl mb-5 dark:text-white">
            How it works
          </h2>
          <p className="font-light text-2xl mb-20 dark:text-white">
            Get your professional resume in{' '}
            <span className="text-indigo-600 font-bold ">3</span> simple steps
          </p>
        </div>
      </div>
      <ul className="grid grid-cols-3 gap-x-15">
        <Step
          stepNumber={'1'}
          title={'Fill the Form'}
          description={
            'Enter your personal information, work experience, and skills in our simple form interface.'
          }
        />
        <Step
          stepNumber={'2'}
          title={'Watch It Build'}
          description={
            'See your resume come to life in real-time as you type. Make adjustments on the fly.'
          }
        />
        <Step
          stepNumber={'3'}
          title={'Download & Apply'}
          description={
            'Export your polished resume as PDF and start applying to your dream jobs immediately.'
          }
        />
      </ul>
    </section>
  );
}
