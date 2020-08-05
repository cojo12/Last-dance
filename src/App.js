import React from 'react';
import Navigation from './components/navbar/index';
import Rows from './components/Row/index';
// import Cols from './components/Col/index';
import ItineraryCard from "./components/card/index";

function App() {
  return (
    <div>
      <Rows />
      {/* <Cols /> */}
      <Navigation />
      <ItineraryCard />
    </div>
  );
}

export default App;
