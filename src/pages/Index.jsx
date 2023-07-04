import React from 'react';
import Header from '../widgets/Header';
import Hero from '../widgets/Hero';
import Feature from '../widgets/features';

function Index() {
  return (
  <div className="container mx-auto p-4">
    <Header />
    <main className="mt-16">
        <Hero />
        <Feature />
    </main>
  </div>)
}

export default Index