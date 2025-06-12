import React from 'react';

export default function Hero() {
  return (
    <section className="p-20 bg-gray-200 flex flex-col items-center dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center gap-y-10 mb-15">
        <h1 className="text-6xl text-indigo-600 font-semibold dark:text-white">
          ResumeFast
        </h1>

        <p className="font-semibold text-center text-xl dark:text-white">
          Fill out a simple form and watch your professional resume come to life
          <br />
          in real-time. No more formatting headaches.
        </p>
      </div>
    </section>
  );
}
