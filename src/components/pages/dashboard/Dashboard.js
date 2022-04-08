import React from "react";
import { Breadcrumb } from "antd";
import FooterAdmin from "../../layout/FooterAdmin";
import GoTop from "../../layout/GoTop";
import HeaderAdmin from "../../layout/HeaderAdmin";

export default function Dashboard() {
  return (
    <div className="fixed-nav sticky-footer" id="page-top">
      <HeaderAdmin />
      <div className="content-wrapper">
        <div className="container-fluid">
          <div
            className="breadcrumb"
            style={{ paddingTop: 10, marginLeft: 100 }}
          >
            <Breadcrumb>
              <Breadcrumb.Item href="dashboard">Riaspedia </Breadcrumb.Item>
              <Breadcrumb.Item> Beranda </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <h2 />
          {/* Icon Cards*/}
          <div className="row">
            <div className="col-xl-3 col-sm-6 mb-3 ml-3">
              <div className="card dashboard text-white bg-primary o-hidden h-100">
                <div className="card-body ml-5">
                  <div className="card-body-icon">
                    <i className="fa fa-fw fa-envelope-open" />
                  </div>
                  <div className="mr-5">
                    <h5>26 New Messages!</h5>
                  </div>
                </div>
                <a
                  className="card-footer text-white clearfix small z-1"
                  href="messages.html"
                >
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fa fa-angle-right" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card dashboard text-white bg-warning o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fa fa-fw fa-star" />
                  </div>
                  <div className="mr-5">
                    <h5>11 New Reviews!</h5>
                  </div>
                </div>
                <a
                  className="card-footer text-white clearfix small z-1"
                  href="reviews.html"
                >
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fa fa-angle-right" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card dashboard text-white bg-success o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fa fa-fw fa-calendar-check-o" />
                  </div>
                  <div className="mr-5">
                    <h5>10 New Bookings!</h5>
                  </div>
                </div>
                <a
                  className="card-footer text-white clearfix small z-1"
                  href="bookings.html"
                >
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fa fa-angle-right" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card dashboard text-white bg-danger o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fa fa-fw fa-heart" />
                  </div>
                  <div className="mr-5">
                    <h5>10 New Bookmarks!</h5>
                  </div>
                </div>
                <a
                  className="card-footer text-white clearfix small z-1"
                  href="bookmarks.html"
                >
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fa fa-angle-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <FooterAdmin />
      </div>
      <GoTop />
    </div>
  );
}
