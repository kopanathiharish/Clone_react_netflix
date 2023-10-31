import React from 'react';
import Nav from './Nav'
import Banner from './Banner';
import './HomeScreen.css';
;
// function makes a call to understand there is importance 
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner/>
    </div>
  );
}
// there is any updates to work
export default HomeScreen;
