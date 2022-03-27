import React from "react";
import Image from "../../assests/img/MUA1.jpg";
import { PlusCircle } from "phosphor-react";

export default function SideNav() {
  return (
    <div>
      <ul className="navbar-nav navbar-sidenav ml-0" id="exampleAccordion">
        <div className="col-lg-0">
          <div className="col-md-12 px-0 d-flex flex-row justify-content-between">
            <div className="profile-image px-0 col-md-2 d-flex flex-column justify-content-top mt-2">
              <img
                className="ml-4"
                src={Image}
                alt="profile-picture"
                style={{
                  width: 40,
                  height: 40,
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginLeft: "24px",
                }}
              />
            </div>
            <div className="detail col-md-10 ml-4 mb-0 mt-2">
              <div>
                <span>Kriwil Salon</span>
              </div>
              <div>
                <span className="mt-0">Wedding Makeup</span>
              </div>
            </div>
          </div>
        </div>
        {/* <img
          src={Image}
          alt="profile-picture"
          style={{
            width: 40,
            height: 40,
            objectFit: "cover",
            borderRadius: "50%",
            marginLeft: "24px",
          }}
        />
        <div class="row text-left">
          <p >Kriwil Salon</p>
        </div> */}

        {/* <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Dashboard"
        >
          <a className="nav-link" href="dashboard">
            <i className="fa fa-fw fa-dashboard" />
            <span className="nav-link-text">Dashboard</span>
          </a>
        </li> */}
        {/* <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Services List"
        >
          <a className="nav-link" href="/tambah-service">
            <i class="ph-plus-circle" />
            <PlusCircle size={32} />
            <i class="ph-plus-circle"></i>
            <span className="nav-link-text">Tambah Pelayanan</span>
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
            <span className="nav-link-text pl-2">Vendor</span>
          </a>
        </li>
      </ul>
      <ul className="navbar-nav sidenav-toggler ml-0">
        <li className="nav-item">
          <a className="nav-link text-center" id="sidenavToggler">
            <i className="fa fa-fw fa-angle-left" />
          </a>
        </li>
      </ul>
    </div>
  );
}
