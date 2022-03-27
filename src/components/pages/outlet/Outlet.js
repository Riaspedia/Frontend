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
            <div className="col-lg-10">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Cari Lokasi Kota, Kategori, Nama Vendor..."
                />
                <i className="icon_search" />
              </div>
            </div>
            {/* <div className="col-lg-3">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Where"
                />
                <i className="icon_pin_alt" />
              </div>
            </div> */}
            {/* <div className="col-lg-3">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Where"
                />
                <i className="icon_pin_alt" />
              </div>
            </div> */}
            <div className="col-lg-2">
              <input
                type="submit"
                className="btn_search"
                defaultValue="Search"
              />
            </div>
          </div>
        </div>
        <CardOutlet />
      </div>
      <FooterCliennt />
    </div>
  );
};

export default Outlet;
