import React from 'react';
import Banner from './Banner';
import './HomeScreen.css';
import Nav from './Nav';

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <h1>the title netf</h1>
    </div>
  );
}

export default HomeScreen;
