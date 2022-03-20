import React from "react";

export default function SideNav() {
  return (
    <div >
      <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Dashboard"
        >
          <a className="nav-link" href="dashboard">
            <i className="fa fa-fw fa-dashboard" />
            <span className="nav-link-text">Dashboard</span>
          </a>
        </li>
        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Services List"
        >
          <a className="nav-link" href="list">
            <i className="fa fa-fw fa-list" />
            <span className="nav-link-text">Services List</span>
          </a>
        </li>
        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Reviews"
        >
          <a className="nav-link" href="reviews">
            <i className="fa fa-fw fa-star" />
            <span className="nav-link-text">Reviews</span>
          </a>
        </li>

        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="My Vendor"
        >
          <a className="nav-link" href="profilevendor">
            <i className="fa fa-fw fa-user" />
            <span className="nav-link-text">My Vendor</span>
          </a>
        </li>
      </ul>
      <ul className="navbar-nav sidenav-toggler">
        <li className="nav-item">
          <a className="nav-link text-center" id="sidenavToggler">
            <i className="fa fa-fw fa-angle-left" />
          </a>
        </li>
      </ul>
    </div>
  );
}
