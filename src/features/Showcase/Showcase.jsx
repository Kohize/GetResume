import React from 'react';

export default function Showcase() {
  return (
    <div className="max-w-5xl">
      <div className="grid grid-cols-2 justify-center bg-slate-700 p-10 items-center justify-items-center rounded-lg gap-x-20">
        <div className="rounded-lg bg-gray-300 py-5 px-10 min-w-md text-lg min-h-md">
          <h3 className="font-bold text-center mb-10 text-xl">Simple Form</h3>
          <ul className="list-disc">
            <li className="font-extralight text-xl">Personal Information</li>
            <li className="font-extralight text-xl">Work Experience</li>
            <li className="font-extralight text-xl">Skills & Education</li>
          </ul>
        </div>
        <div className="rounded-lg bg-gray-300 py-5 px-10 min-w-md min-h-lg text-md">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-2xl">Don Frye</h3>
            <p className="font-semibold text-sm text-gray-500">
              Software Developer
            </p>
          </div>
          <br />
          <ul>
            <li className="font-extralight text-xl">
              Profile: <span className="text-sm">Highly motivated</span>
            </li>
            <li className="font-extralight text-xl">
              Experience: <span className="text-sm">Tons of React</span>
            </li>
            <li className="font-extralight text-xl">
              Education: <span className="text-sm">Mumbai Call-center</span>
            </li>
          </ul>
        </div>
        <div className=" col-start-1 col-end-3 mt-10 flex gap-2">
          <span className="animate-bounce">⚡</span>
          <span className="text-center font-semibold text-amber-50 ">
            Updates in real-time as you type
          </span>
        </div>
      </div>
    </div>
  );
}
