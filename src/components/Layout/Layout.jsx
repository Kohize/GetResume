import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className="bg-zinc-200 flex flex-col h-screen justify-between">
      <Header></Header>
      <main className="h-10 mb-auto">
        <Outlet></Outlet>
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
}
