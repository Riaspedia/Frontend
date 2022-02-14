import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../auth/Login";
import Popup from "../../auth/Popup";
import Register from "../../auth/Register";
import Home from "../pages/home/Home";
import Home1 from "../pages/Home1";
import DetailOutlet from "../pages/outlet/DetailOutlet";
import Outlet from "../pages/outlet/Outlet";
import EditProfileClient from "../pages/profile/EditProfileClient";
import ProfileClient from "../pages/profile/ProfileClient";

export default function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/home" exact>
            <Home1 />
          </Route>
          <Route path="/outlet" exact>
            <Outlet />
          </Route>
          <Route path="/detail" exact>
            <DetailOutlet />
          </Route>
          <Route path="/profileclient" exact>
            <ProfileClient/>
          </Route>
          <Route path="/editprofileclient" exact>
            <EditProfileClient/>
          </Route>
          {/* <Route path="/register" {Register}/> */}
        </Switch>
      </Router>
    </div>
  );
}
