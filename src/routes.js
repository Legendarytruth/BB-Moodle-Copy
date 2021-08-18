import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Profile from "./containers/Profile";
import HomepageLayout from "./containers/Home";
import AssignmentList from "./containers/AssignmentList";

const BaseRouter = () => (
  <Hoc>
    <Route path="/assignment-list" component={AssignmentList} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/profile/:id" component={Profile} />
    <Route exact path="/" component={HomepageLayout} />
  </Hoc>
);
//
export default BaseRouter;
