import React from 'react';
import Header from '../widgets/Header';
import Hero from '../widgets/Hero';
import "./css/backgrounds-style.css"

function Index() {
  return (
  <div className="container mx-auto p-4">
    <Header />
    <main className="mt-16">
        <Hero />
    </main>
  </div>)
}

export default Index