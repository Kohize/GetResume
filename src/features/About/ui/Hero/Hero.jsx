import React from 'react';

export default function Hero() {
  return (
    <section>
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
      </div>
    </section>
  );
}
