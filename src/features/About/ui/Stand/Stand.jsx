import React from 'react';
import StandCard from './StandCard';

export default function Stand() {
  return (
    <section className="flex flex-col items-center p-20 bg-gray-100 dark:bg-gray-800">
      <h2 className="font-semibold text-4xl mb-5 dark:text-white text-center">
        The Story Behind <span className="text-indigo-600">ResumeFast</span>
      </h2>
      <p className="font-light text-2xl mb-20 dark:text-white text-center">
        Experience the future of resume building with our intelligent platform
      </p>
      <ul className="grid grid-cols-3 gap-5">
        <StandCard
          color={'green'}
          title={'Simplicity First'}
          description={
            'Complex problems deserve simple solutions. We believe powerful tools should be intuitive, not intimidating. Every feature is designed with ease-of-use as the top priority.'
          }
          icon={'🚀'}
        />
        <StandCard
          color={'pink'}
          title={'Beautiful by Default'}
          description={
            " Everyone deserves a resume that looks professionally designed. We've done the hard work of creating stunning templates so you can focus on your content, not your design skills."
          }
          icon={'✨'}
        />
        <StandCard
          color={'lightblue'}
          title={'Accessible to All'}
          description={
            'Professional resume tools shouldn not be a luxury. We are committed to keeping ResumeFast accessible and affordable, because everyone deserves a shot at their dream job.'
          }
          icon={'🤝'}
        />
      </ul>
    </section>
  );
}
