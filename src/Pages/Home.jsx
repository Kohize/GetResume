import React from 'react';
import Hero from '../features/Hero/Hero';
import Benefits from '../features/Benefits/Benefits';
import Steps from '../features/Steps/Steps';
import Callout from '../features/Callout/Callout';

export default function Home() {
  return (
    <section>
      <Hero />
      <Benefits />
      <Steps />
      <Callout />
    </section>
  );
}
