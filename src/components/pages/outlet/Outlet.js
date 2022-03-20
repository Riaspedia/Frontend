import React, { useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import HeaderClient from "../../layout/HeaderClient";
import FooterCliennt from "../../layout/FooterClient";
import CardOutlet from "./CardOutlet";
import { baseURL } from "../../routes/Config";


const Outlet = () => {
  
  return (
    <div id="page">
      <HeaderClient />
      {/* <div id="preloader">
                    <div data-loader="circle-side" />
                </div> */}
      {/* /Page Preload */}
      <section className="hero_in tours">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp">
              <span />
              Rias Pedia Outlet
            </h1>
          </div>
        </div>
      </section>

      <div className="collapse" id="collapseMap">
        <div id="map" className="map" />
      </div>
      {/* End Map */}
      <div className="container margin_60_35">
        <div className="col-lg-12">
          <div className="row no-gutters custom-search-input-2 inner">
            <div className="col-lg-4">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="What are you looking for..."
                />
                <i className="icon_search" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Where"
                />
                <i className="icon_pin_alt" />
              </div>
            </div>
            <div className="col-lg-3">
              <select className="wide">
                <option>All Categories</option>
                <option>Churches</option>
                <option>Historic</option>
                <option>Museums</option>
                <option>Walking tours</option>
              </select>
            </div>
            <div className="col-lg-2">
              <input
                type="submit"
                className="btn_search"
                defaultValue="Search"
              />
            </div>
          </div>
          {/* /row */}
        </div>
      
        <CardOutlet />
      </div>
      <FooterCliennt />
    </div>
  );
};

export default Outlet;
