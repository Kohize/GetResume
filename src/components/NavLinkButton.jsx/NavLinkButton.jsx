import { NavLink } from 'react-router';

export default function NavLinkButton({ to, children, target }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `p-3 font-semibold bg-indigo-600 text-zinc-50 rounded-lg hover:opacity-90 cursor-pointer ${
          isActive ? 'opacity-60' : ''
        }`
      }
      to={to}
      target={target}>
      {children}
    </NavLink>
  );
}
