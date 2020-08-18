import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/navbar/index";
import Discover from "./pages/Discover";
import CreateItinerary from "./pages/CreateItinerary";
import FullDetails from "./pages/FullDetails";
import Profile from "./pages/Profile";
// import NewLogin from "./pages/NewLogin";
import Auth0ProviderWithHistory from "./auth0-provider-with-history"

function App() {
  return (
    <Router>
      <div>
        <Auth0ProviderWithHistory>
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
          <Route exact path="/FullDetails/:id" component = {FullDetails} />
          <Route exact path={"/profile"}>
            <Profile />
          </Route>
          <Route exact path={"/signup"}>
            {/* <NewLogin /> */}
          </Route>
        </Switch>
        </Auth0ProviderWithHistory>
      </div>
    </Router>

  );
}

export default App;
