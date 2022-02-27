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
          
        </div>
        {/* /.container-fluid*/}
        <FooterAdmin />
      </div>
      {/* /.container-wrapper*/}

      {/* Scroll to Top Button*/}
      <GoTop />
      {/* Logout Modal*/}
    </div>
  );
}
