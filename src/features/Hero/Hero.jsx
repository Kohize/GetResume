import React from 'react';
import { Link } from 'react-router';
import Showcase from '../Showcase/Showcase';

export default function Hero() {
  return (
    <section className="p-20 bg-gray-200 flex flex-col items-center dark:bg-gray-900">
      <div>
        <div className="flex flex-col items-center justify-center gap-y-10 mb-15">
          <h1 className="text-5xl font-semibold dark:text-white">
            Build Your{' '}
            <span className="text-6xl text-indigo-600">Perfect Resume</span> in
            Minutes
          </h1>
          <p className="font-semibold text-center text-xl dark:text-white">
            Fill out a simple form and watch your professional resume come to
            life
            <br />
            in real-time. No more formatting headaches.
          </p>
        </div>
        <div className="flex gap-x-5 justify-center mb-15">
          <Link
            className="border-1 border-indigo-600 rounded-md p-2 text-indigo-600 font-semibold dark:text-white  hover:bg-indigo-600 hover:text-white"
            to={'resume'}>
            Start Building
          </Link>
          <Link
            className="border-1 border-indigo-600 rounded-md p-2 text-indigo-600 font-semibold dark:text-white hover:bg-indigo-600 hover:text-white"
            to={'https://github.com/Kohize/GetResume'}>
            Source
          </Link>
        </div>
        <Showcase />
      </div>
    </section>
  );
}
