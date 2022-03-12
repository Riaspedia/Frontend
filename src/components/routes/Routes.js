import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../auth/Login";
import LoginVendor from "../../auth/LoginVendor";
import Popup from "../../auth/Popup";
import Register from "../../auth/Register";
import RegisterVendor from "../../auth/RegisterVendor";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import Home1 from "../pages/Home1";
import List from "../pages/list/List";
import DetailOutlet from "../pages/outlet/DetailOutlet";
import Outlet from "../pages/outlet/Outlet";
import EditProfileClient from "../pages/profile/EditProfileClient";
import ProfileClient from "../pages/profile/ProfileClient";
import EditProfileAdmin from "../pages/profilevendor/EditProfileAdmin";
import ProfileAdmin from "../pages/profilevendor/ProfileAdmin";
import Review from "../pages/review/Review";

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
          {/* <Route path="/profile" exact>
            <Profile/>
          </Route> */}
          <Route path="/profileclient" exact>
            <ProfileClient />
          </Route>
          <Route path="/editprofileclient" exact>
            <EditProfileClient/>
          </Route>
          <Route path="/login-vendor" exact>
            <LoginVendor />
          </Route>
          <Route path="/register-vendor" exact>
            <RegisterVendor />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/reviews" exact>
            <Review />
          </Route>
          <Route path="/list" exact>
            <List />
          </Route>
          <Route path="/profilevendor" exact>
            <ProfileAdmin />
          </Route>
          <Route path="/editprofilevendor" exact>
            <EditProfileAdmin />
          </Route>
          {/* <Route path="/register" {Register}/> */}
        </Switch>
      </Router>
    </div>
  );
}
