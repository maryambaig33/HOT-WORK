import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Workouts from './components/Workouts';
import Membership from './components/Membership';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-hotDark font-body text-white selection:bg-hotOrange selection:text-white">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Workouts />
        <Membership />
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
};

export default App;
