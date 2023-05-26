import React from "react";
import { Container } from "@material-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "../routes/navigation/navigation.route";
import Home from "../routes/home-test/home.route";
import Auth from "../routes/authentication/authentication.route";
import ProDetails from "../routes/professional_details/professional_details.route";
import PostDetails from "../components/post-details/post-details.component";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Container maxWidth="xl">
      {/* <Navbar /> */}
      <Switch>
        {/* <Route path="/" exact component={() => <Redirect to="/posts" />} /> */}
        {/* <Route path="/posts" exact component={Home} />
        <Route path="/posts/search" exact component={Home} />
        <Route path="/posts/:post_id" exact component={PostDetails} /> */}
        <Route path="/auth" exact component={(user) => (user ? <Auth /> : <Redirect to="/posts" />)} />
        <Route path="/pro-details" exact component={ProDetails} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Container>
  );
};

export default App;
