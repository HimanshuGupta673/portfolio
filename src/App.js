import React, { useEffect, useState } from 'react';
import './App.css';
import About_me from './components/Aboutme.js/About_me';
import Aspire from './components/Aspire/Aspire';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Banner from './components/Home/Banner';
import Inspiration from './components/Inspiration/Inspiration';
import Myskills from './components/MySkills/Myskills';
import MyProjects from './components/Projects/MyProjects';
import Animation from './components/Animation/Animation';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
      {showAnimation ? (
        <Animation />
      ) : (
        <>
          <Header />
          <Banner />
          <About_me />
          <Myskills />
          <MyProjects />
          <Aspire />
          <Inspiration />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
