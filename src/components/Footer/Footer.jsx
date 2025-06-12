import React from 'react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="py-8 px-20 bg-gray-200 grid grid-cols-3 justify-center dark:bg-gray-800 shadow-xl">
      <p className="font-bold text-xl text-gray-500">GetResume</p>
      <div className="flex justify-center">
        <Link
          className="text-gray-500 hover:text-gray-950 text-center inline"
          to={'https://github.com/Kohize/GetResume'}
          target="_blank">
          Source code
        </Link>
      </div>
      <p className="text-gray-500 text-end">
        © 2025 GetResume. All rights reserved.
      </p>
    </footer>
  );
}
