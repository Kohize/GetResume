import React from 'react';

export default function Showcase() {
  return (
    <div>
      <div className="flex flex-col gap-y-5 xl:grid xl:grid-cols-2 justify-center bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 p-10 items-center justify-items-center rounded-lg gap-x-10">
        <div className="rounded-lg bg-gray-100 py-5 px-10 w-md text-lg min-h-50">
          <h3 className="font-bold text-center mb-10 text-xl">Simple Form</h3>
          <ul className="list-disc">
            <li className="font-extralight text-xl">Personal Information</li>
            <li className="font-extralight text-xl">Work Experience</li>
            <li className="font-extralight text-xl">Skills & Education</li>
          </ul>
        </div>
        <div className="rounded-lg bg-gray-100 py-5 px-10 w-md min-h-50 text-md">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-2xl">Don Frye</h3>
            <p className="font-semibold text-sm text-gray-500">
              Software Developer
            </p>
          </div>
          <br />
          <ul>
            <li className=" text-xl">
              Profile:{' '}
              <span className="text-sm font-extralight">Highly motivated</span>
            </li>
            <li className=" text-xl">
              Experience:{' '}
              <span className="text-sm font-extralight">Tons of React</span>
            </li>
            <li className=" text-xl">
              Education:{' '}
              <span className="text-sm font-extralight">
                Mumbai Call-center
              </span>
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
