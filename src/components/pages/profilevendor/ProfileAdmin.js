import React from "react";
import { MailFilled, PhoneFilled, HomeFilled } from "@ant-design/icons";
import { Breadcrumb, Button, Divider, Space } from "antd";
import FooterAdmin from "../../layout/FooterAdmin";
import GoTop from "../../layout/GoTop";
import HeaderAdmin from "../../layout/HeaderAdmin";
import Image from "../../../assests/img/MUA1.jpg";

export default function ProfileAdmin() {
  return (
    <div className="fixed-nav sticky-footer" id="page-top">
      <HeaderAdmin />
      <div className="content-wrapper">
        <div className="container-fluid">
          {/* Breadcrumbs*/}
          <div
            className="breadcrumb"
            style={{ paddingLeft: 15, paddingTop: 10 }}
          >
            <Breadcrumb>
              <Breadcrumb.Item href="dashboard">Riaspedia </Breadcrumb.Item>
              <Breadcrumb.Item> My Vendor </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div className="box_general padding_bottom">
            <div className="header_box version_2">
              <Space direction="horizontal">
                <h2>
                  <i className="fa fa-user" />
                  Detail Vendor
                </h2>
              </Space>
              <Button
                href="/editprofilevendor"
                //   onClick={handleDetail}
                type="danger"
                ghost
                style={{ borderRadius: 8, float: "right", height: "100%" }}
              >
                Edit Vendor
              </Button>
            </div>
            <div className="row">
              <div className="col-md-2 " >
                <div className="profile-image px-0 col-md-2 d-flex flex-column justify-content-center">
                  <img
                    src={Image}
                    alt="profile-picture"
                    style={{
                      width: 150,
                        height: 150,
                        objectFit: "cover",
                        borderRadius: "50%",
                        marginLeft: "24px",
                    }}
                  />
                </div>
              </div>

              <div className="col-md-10 ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <Space direction="horizontal">
                        <label style={{ fontSize: "15pt" }}>Kriwil Salon</label>
                      </Space>
                    </div>
                  </div>
                </div>

                {/* /row*/}
                <div className="row">
                  <div className="col-md-4 pb-0">
                    <div className="form-group">
                      <span>
                        <i className="fa fa-phone" /> 081585196656{" "}
                      </span>
                      <span>
                        <i className="fa fa-envelope-o ml-4" /> kriwilsalon@gmail.com{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 pt-0">
                    <div className="form-group">
                      <span>
                        <i className="fa fa-map-marker" /> Jl. Boulevard Hijau
                        Blok B.8 No. 25-26. Harapan Indah. Bekasi Kota Bekasi,
                        Jawa Barat{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="form-group">
                  <label style={{ fontSize: "15pt" }}>Description</label>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label style={{ fontSize: "12pt", color: "GrayText" }}>
                        Budi Curly Hair Salon & Reflexology adalah jasa
                        perawatan rambut yang berspesialisasi ke rambut
                        bertekstur keriting dan ikal. Didirikan oleh Gracia
                        Indriani, selaku Founder Kriwil Indonesia. Kriwil juga
                        menyediakan produk perawatan untuk rambut bertekstur
                        keriting dan ikal dengan bahan natural dan organik.
                      </label>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label style={{ fontSize: "15pt" }}>Working Hours</label>
                    </div>
                  </div>
                </div>
                <div className="row mb10">
                  <div className="col-xs-6 sm-6 col-md-4">
                    <div className="schedule-card">
                      <div className="hb-semi-font black bold">Monday</div>
                      <div className="hour">
                        {/* 10:00 AM - 08:00 PM */}
                        12.00 AM - 12.30 AM
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 sm-6 col-md-4">
                    <div className="schedule-card">
                      <div className="hb-semi-font black bold">Tuesday</div>
                      <div className="hour">
                        {/* 10:00 AM - 08:00 PM */}
                        10.00 AM - 09.00 PM
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 sm-6 col-md-4">
                    <div className="schedule-card">
                      <div className="hb-semi-font black bold">Wednesday</div>
                      <div className="hour">
                        {/* Closed */}
                        10.00 AM - 09.00 PM
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 sm-6 col-md-4">
                    <div className="schedule-card">
                      <div className="today-open">
                        <div className="hb-small">Today</div>
                      </div>
                      <div className="hb-semi-font black bold">Thursday</div>
                      <div className="hour">
                        {/* 08:00 AM - 10:00 PM */}
                        10.00 AM - 09.00 PM
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 sm-6 col-md-4">
                    <div className="schedule-card">
                      <div className="hb-semi-font black bold">Friday</div>
                      <div className="hour">
                        {/* Closed */}
                        10.00 AM - 09.00 PM
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 sm-6 col-md-4">
                    <div className="schedule-card">
                      <div className="hb-semi-font black bold">Saturday</div>
                      <div className="hour">
                        {/* 08:00 AM - 10:00 PM */}
                        10.00 AM - 09.00 PM
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 sm-6 col-md-4">
                    <div className="schedule-card">
                      <div className="hb-semi-font black bold">Sunday</div>
                      <div className="hour">
                        {/* Closed */}
                        Closed
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ fontSize: "12pt" }}>
                        Sunday : 10 A.M. - 8 P.M.
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ fontSize: "12pt" }}>
                        Monday : 10 A.M. - 8 P.M.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ fontSize: "12pt" }}>
                        Tuesday : 10 A.M. - 8 P.M.
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ fontSize: "12pt" }}>
                        Wednesday : 10 A.M. - 8 P.M.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ fontSize: "12pt" }}>
                        Thursday : 10 A.M. - 8 P.M.
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ fontSize: "12pt" }}>
                        Friday : 10 A.M. - 8 P.M.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label style={{ fontSize: "12pt" }}>
                        Saturday : 10 A.M. - 8 P.M.
                      </label>
                    </div>
                  </div>
                </div> */}

                {/* /row*/}

                {/* /row*/}
              </div>
            </div>
          </div>
          {/* /box_general*/}

          {/* /row*/}
        </div>
        <FooterAdmin />
        {/* /.container-fluid*/}
      </div>
      {/* /.container-wrapper*/}
      <GoTop />
      {/* Scroll to Top Button*/}
    </div>
  );
}
