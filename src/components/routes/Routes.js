import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../auth/Login";
import LoginVendor from "../../auth/LoginVendor";
import Register from "../../auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import Home1 from "../pages/Home1";
import AddService from "../pages/Service/AddService";
import DetailOutlet from "../pages/outlet/DetailOutlet";
import Outlet from "../pages/outlet/Outlet";
import EditProfileClient from "../pages/profile/EditProfileClient";
import ProfileClient from "../pages/profile/ProfileClient";
import EditProfileAdmin from "../pages/profilevendor/EditProfileAdmin";
import ProfileAdmin from "../pages/profilevendor/ProfileAdmin";
import Review from "../pages/review/Review";
import EditService from "../pages/Service/EditServide";
import ListService from "../pages/Service/ListService";
import RegisterUserAdmin from "../../auth/RegisterUserAdmin";
import RegisterVendorAdmin from "../../auth/RegisterVendorAdmin";
import CardLoginRegisterAdmin from "../../auth/CardLoginRegisterAdmin";
import Maps from "../pages/location/Maps";
import CardDetailMaps from "../pages/location/CardDetailMaps";
import GalleryService from "../pages/Service/GalleryService";

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
          <Route path="/detailOutlet/:id" exact>
            <DetailOutlet />
          </Route>
          <Route path="/profileclient" exact>
            <ProfileClient />
          </Route>
          <Route path="/editprofileclient" exact>
            <EditProfileClient />
          </Route>
          <Route path="/login-vendor" exact>
            <LoginVendor />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/reviews" exact>
            <Review />
          </Route>
          <Route path="/list" exact>
            <ListService />
          </Route>
          <Route path="/profilevendor" exact>
            <ProfileAdmin />
          </Route>
          <Route path="/editprofilevendor" exact>
            <EditProfileAdmin />
          </Route>
          <Route path="/tambah-service" exact>
            <AddService />
          </Route>
          <Route path="/edit-service/:id" exact>
            <EditService />
          </Route>
          <Route path="/register-user-admin" exact>
            <RegisterUserAdmin />
          </Route>
          <Route path="/register-vendor-admin" exact>
            <RegisterVendorAdmin />
          </Route>
          <Route path="/card" exact>
            <CardLoginRegisterAdmin />
          </Route>
          <Route path="/card-maps" exact>
            <CardDetailMaps />
          </Route>

          <Route path="/lokasi-maps" exact>
            <Maps />
          </Route>
          <Route path="/gallery-service" exact>
            <GalleryService />
          </Route>

          {/* <Route path="/register" {Register}/> */}
        </Switch>
      </Router>
    </div>
  );
}
