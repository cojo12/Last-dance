import React from 'react';
import Navigation from './components/navbar/index';
import Rows from './components/Row/index';
// import Cols from './components/Col/index';
import ItineraryCard from "./components/card/index";
import FormCard from "./components/NewItinerary/FormCard/index";

function App() {
  return (
    <div>
      <Rows />
      {/* <Cols /> */}
      <Navigation />
      <ItineraryCard />
      <FormCard />
    </div>
  );
}

export default App;
