import React from "react";
import { Breadcrumb } from "antd";
import FooterAdmin from "../../layout/FooterAdmin";
import GoTop from "../../layout/GoTop";
import AdminHeader from "../../layout/AdminHeader";

export default function Dashboard() {
  return (
    <div className="fixed-nav sticky-footer" id="page-top">
      <AdminHeader />
      {/* /Navigation*/}
      <div className="content-wrapper">
        <div className="container-fluid">
          {/* Breadcrumbs*/}

          <div
            className="breadcrumb"
            style={{ paddingLeft: 15, paddingTop: 10 }}
          >
            <Breadcrumb>
              <Breadcrumb.Item href="dashboard">Riaspedia </Breadcrumb.Item>
              <Breadcrumb.Item> My Dashboard </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {/* Icon Cards*/}
          {/* /cards */}
          <h2 />
          <div className="box_general padding_bottom">
            <div className="header_box version_2">
              <h2>
                <i className="fa fa-bar-chart" />
                Statistic
              </h2>
            </div>
            <canvas
              id="myAreaChart"
              width="100%"
              height={30}
              style={{ margin: "45px 0 15px 0" }}
            />
          </div>
        </div>
        {/* /.container-fluid*/}
      </div>
      {/* /.container-wrapper*/}
      <FooterAdmin />
      {/* Scroll to Top Button*/}
      <GoTop />
      {/* Logout Modal*/}
    </div>
  );
}
