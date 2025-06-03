import React from 'react';
import { Link, NavLink } from 'react-router';
import Button from '../Button/Button';
import NavLinkButton from '../NavLinkButton.jsx/NavLinkButton';

export default function Header() {
  return (
    <header className="p-5 flex justify-between bg-zinc-100  items-center">
      <Link>
        <span className="font-bold text-slate-900 text-2xl">GetResume</span>
      </Link>
      <nav className="flex gap-3">
        <NavLinkButton to={'/'}>Home</NavLinkButton>
        <NavLinkButton to={'about'}>About</NavLinkButton>

        <NavLinkButton to={'https://github.com/Kohize'} target="_blank">
          Contacts
        </NavLinkButton>
      </nav>
      <div>
        <Button>Toggle Dark Mode</Button>
      </div>
    </header>
  );
}
