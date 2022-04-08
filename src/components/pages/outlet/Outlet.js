import React, { useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import HeaderClient from "../../layout/HeaderClient";
import FooterCliennt from "../../layout/FooterClient";
import CardOutlet from "./CardOutlet";
import { baseURL } from "../../routes/Config";

const Outlet = () => {
  const [input, setInput] = useState({
    city: "",
    category: "",
    name: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  return (
    <div id="page">
      {Cookies.get("token") != null ? <HeaderClient /> : <Header />}
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
                  placeholder="Cari nama vendor..."
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                />
                <i className="icon_search" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Kota"
                  name="city"
                  value={input.city}
                  onChange={handleChange}
                />
                <i className="icon_pin_alt" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Kategori"
                  name="category"
                  value={input.category}
                  onChange={handleChange}
                />
                <i className="" />
              </div>
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
        <CardOutlet
          name={input.name}
          city={input.city}
          category={input.category}
        />
      </div>
      <FooterCliennt />
    </div>
  );
};

export default Outlet;
