import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className="bg-zinc-200 min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
