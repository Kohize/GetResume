import React from 'react';
import Button from '../../components/Button/Button';

export default function Callout() {
  return (
    <section className="p-20 bg-white  dark:bg-gray-800">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-4xl mb-5 dark:text-white">
          Ready to Build Your Perfect Resume?
        </h2>
        <p className="font-light text-2xl mb-5 dark:text-white">
          Join thousands of job seekers who've already created stunning resumes
          with ResumeFast
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Button>Start Building Now - It's Free</Button>
        <p className="text-center mt-5 text-gray-300 text-sm">
          No credit card required • Takes less than 5 minutes
        </p>
      </div>
    </section>
  );
}
