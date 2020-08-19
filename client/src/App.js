import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/navbar/index";
import Discover from "./pages/Discover";
import CreateItinerary from "./pages/CreateItinerary";
import FullDetails from "./pages/FullDetails";
import Profile from "./pages/Profile";
// import NewLogin from "./pages/NewLogin";
import Auth0ProviderWithHistory from "./auth0-provider-with-history"
import UserProfile from "./components/UserProfile";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
// import { useAuth0 } from "@auth0/auth0-react"


function App() {

  return (
    <Router>
      <div>
        <Auth0ProviderWithHistory>
        <Navigation />
        <Route render={({location}) => (
          <TransitionGroup>
        <CSSTransition
        key={location}
        timeout={400}
        classNames="fade">
        <Switch location={location}>
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
            <UserProfile />
            <Profile />
          </Route>
          <Route exact path={"/signup"}>
            {/* <NewLogin /> */}
          </Route>
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        )} />
        </Auth0ProviderWithHistory>
      </div>
    </Router>

  );
}

export default App;
