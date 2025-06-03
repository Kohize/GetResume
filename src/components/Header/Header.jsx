import React from 'react';
import { Link, NavLink } from 'react-router';

export default function Header() {
  return (
    <>
      <Link>
        <span className="font-bold text-white">GetResume</span>
      </Link>

      <nav>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contacts</NavLink>
      </nav>
    </>
  );
}
