import React, { useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL } from "../routes/Config";
import Image from "../../assests/img/Profile.png"

export default function SideNav() {
  const id = Cookies.get("vendor_id");
  const [input, setInput] = useState();
  // const [image, setImage] = useState(Image);

  const dataVendor = async () => {
    let result = await axios.get(baseURL + `/api/vendor/${id}`, {
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    });

    let data = result.data.data;
    setInput({
      data: data,
    });
  };

  useEffect(() => {
    dataVendor();
  }, []);

  if (input != undefined) {
    return (
      <div>
        <ul
          className="navbar-nav navbar-sidenav ml-0"
          style={{ width: "355px" }}
          id="exampleAccordion"
        >
          <div className="col-lg-0">
            <div className="col-md-12 px-0 d-flex flex-row justify-content-between">
              <div className="profile-image px-0 col-md-2 d-flex flex-column justify-content-top mt-2">
                <img
                  className="ml-4"
                  src={input.data.image}
                  alt="profile-picture"
                  style={{
                    width: 50,
                    height: 50,
                    objectFit: "cover",
                    borderRadius: "50%",
                    marginLeft: "24px",
                  }}
                />
              </div>
              <div className="detail col-md-10 ml-4 mb-0 mt-2">
                <div>
                  {/* <span>nama vendor</span> */}
                  <span>{input.data.name}</span>
                </div>
                <div>
                  <span className="mt-0">{input.data.category}</span>
                  {/* <span className="mt-0">kategori</span> */}
                </div>
              </div>
            </div>
          </div>

          {/* <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title="dashboard "
          >
            <a className="nav-link" href="/dashboard">
            <i class="fa fa-tachometer" aria-hidden="true"></i>
              <span className="nav-link-text pl-2">Beranda</span>
            </a>
          </li> */}

          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title="Services List"
          >
            <a className="nav-link" href="/list">
              <i className="fa fa-fw fa-list" />
              <span className="nav-link-text pl-2">Daftar Pelayanan</span>
            </a>
          </li>

          <li
            class="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title=""
            data-original-title="Add listing"
          >
            <a class="nav-link" href="/tambah-service">
              <i class="fa fa-fw fa-plus-circle"></i>
              <span class="nav-link-text pl-2">Tambah Pelayanan</span>
            </a>
          </li>

          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title="Reviews"
          >
            <a className="nav-link" href="/lokasi-maps">
              <i class="fa fa-map-marker"></i>
              <span className="nav-link-text pl-2"> Lokasi</span>
            </a>
          </li>
          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title="Reviews"
          >
            <a className="nav-link" href="/reviews">
              <i className="fa fa-fw fa-star" />
              <span className="nav-link-text pl-2">Ulasan</span>
            </a>
          </li>

          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title="My Vendor"
          >
            <a className="nav-link" href="/profilevendor">
              <i className="fa fa-fw fa-user" />
              <span className="nav-link-text pl-2">Profil</span>
            </a>
          </li>
        </ul>
        <ul
          className="navbar-nav sidenav-toggler ml-0"
          style={{ width: "355px" }}
        >
          <li className="nav-item">
            <a className="nav-link text-center" id="sidenavToggler">
              <i className="fa fa-fw fa-angle-left" />
            </a>
          </li>
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}
