import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import FeedPage from "../pages/FeedPage";
import PostPage from "../pages/PostPage";
import ErrorPage from "../pages/ErrorPage";


const Router = () => {
    return (
      <BrowserRouter>
        {/* <Header/> */}
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
  
          <Route exact path="/">
            <FeedPage />
          </Route>
  
          <Route exact path="/post">
            <PostPage />
          </Route>

          <Route exact path="/signup">
            <SignupPage />
          </Route>
  
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;