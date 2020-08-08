import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './components/navbar/index';
import Discover from "./pages/Discover";
import Favorites from "./pages/Favorites";
import MyItineraries from "./pages/MyItineraries";
import Details from "./pages/Detail";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path={["/", "/discover"]}>
            <Discover />
          </Route>
          <Route exact path={"/favorites"}>
            <Favorites />
          </Route>
          <Route exact path={"/myitineraries"}>
            <MyItineraries />
          </Route>
          <Route exact path="/itinerary/:id">
            
          </Route>
          <Route exact path={"/detail"}>
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
