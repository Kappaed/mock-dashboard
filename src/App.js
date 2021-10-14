import React from "react";
import styled from "styled-components";
import MainPage from "./Pages/MainPage";
import BlogPage from "./Pages/BlogPage";
import ProfilePage from "./Pages/ProfilePage";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard" exact>
          <MainPage />
        </Route>
        <Route path="/blogs">
          <BlogPage />
        </Route>

        <Route path="/user" exact>
          <ProfilePage />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
