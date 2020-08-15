import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/navbar/index";
import Discover from "./pages/Discover";
import CreateItinerary from "./pages/CreateItinerary";
import FullDetails from "./pages/FullDetails";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path={["/", "/discover"]}>
            <Discover />
          </Route>
          <Route exact path={"/createitinerary"}>
            <CreateItinerary />
          </Route>
          <Route exact path="/itinerary/:id">
          </Route>
          <Route exact path={"/FullDetails"}>
            <FullDetails />
          </Route>
          <Route exact path={"/profile"}>
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
