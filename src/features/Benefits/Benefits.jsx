import React from 'react';
import Benefit from '../../components/Benefit/Benefit';

export default function Benefits() {
  return (
    <section className="flex flex-col items-center p-20 bg-white dark:bg-gray-800">
      <h2 className="font-semibold text-4xl mb-5 dark:text-white">
        Why Choose <span className="text-indigo-600">GetResume</span>
      </h2>
      <p className="font-light text-2xl mb-20 dark:text-white">
        Experience the future of resume building with our intelligent platform
      </p>
      <ul className="grid grid-cols-3 gap-5">
        <Benefit
          color={'lightblue'}
          title={'Real-Time Preview'}
          description={
            'Watch your resume update instantly as you type. No refresh needed, no waiting around.'
          }
          icon={'⚡'}
        />
        <Benefit
          color={'pink'}
          title={'Beautiful Templates'}
          description={
            'Choose from professionally designed templates that make you stand out from the crowd.'
          }
          icon={'🎨'}
        />
        <Benefit
          color={'green'}
          title={'Super Simple'}
          description={
            'Just fill out our intuitive form. No complex formatting or design skills required.'
          }
          icon={'🚀'}
        />
      </ul>
    </section>
  );
}
