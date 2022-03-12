import React from "react";
import LogoutModal from "./LogoutModal";
import SideNav from "./SideNav";

const AdminHeader = () => {
  return (
    <div>
      {/* Navigation*/}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-default fixed-top"
        id="mainNav"
      >
        <a className="navbar-brand" href="dashboard">
          <img
            src="img/logo.png"
            data-retina="true"
            alt
            width={150}
            height={36}
          />
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <SideNav />
        </div>
        <LogoutModal />
      </nav>
    </div>
  );
};

export default AdminHeader;
