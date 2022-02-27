import React from "react";
import AdminHeader from "../../layout/AdminHeader";

import { Breadcrumb, Button, Divider, Image, Space } from "antd";

import FooterAdmin from "../../layout/FooterAdmin";
import GoTop from "../../layout/GoTop";

export default function ProfileAdmin() {
  return (
    <div className="fixed-nav sticky-footer" id="page-top">
      <AdminHeader />
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
                  Vendor details
                </h2>
                <Button href="editprofilevendor" type="secondary">
                  Edit
                </Button>
              </Space>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <Image
                    width={400}
                    src="https://cdn.pixabay.com/photo/2018/03/19/20/17/beauty-parlor-3241097_960_720.jpg"
                  />
                </div>
              </div>
              <Divider type="vertical" />
              <div className="col-md-8 add_top_40">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <Space direction="horizontal">
                        <label>Name : </label>
                        <label>Beauty Vendor</label>
                      </Space>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <Space direction="horizontal">
                        <label>Email : </label>
                        <label>Rheza@mail.com</label>
                      </Space>
                    </div>
                  </div>
                </div>
                {/* /row*/}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <Space direction="horizontal">
                        <label>Telephone : </label>
                        <label>08583212312498</label>
                      </Space>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <Space direction="horizontal">
                        <label>Zip Code : </label>
                        <label>60225</label>
                      </Space>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <Space direction="horizontal">
                        <label>City : </label>
                        <label>Surabaya</label>
                      </Space>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <Space direction="horizontal">
                        <label>Address : </label>
                        <label>Dukuh Kupang</label>
                      </Space>
                    </div>
                  </div>
                </div>
                {/* /row*/}

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <Space direction="vertical">
                        <label>Description : </label>
                        <label>The Best Beauty Vendor</label>
                      </Space>
                    </div>
                  </div>
                </div>

                {/* /row*/}
              </div>
            </div>
          </div>
          {/* /box_general*/}
          <div className="box_general padding_bottom">
            <div className="header_box version_2">
              <h2>
                <i className="fa fa-clock-o" />
                Opening
              </h2>
            </div>
            <div className="row">
              <div className="col-md-2">
                <label className="fix_spacing">Monday</label>
              </div>
              <div className="col-md-5">
                <div className="form-group"></div>
              </div>
              <div className="col-md-5">
                <div className="form-group"></div>
              </div>
            </div>
            {/* /row*/}
            <div className="row">
              <div className="col-md-2">
                <label className="fix_spacing">Tuesday</label>
              </div>
              <div className="col-md-5">
                <div className="form-group"></div>
              </div>
              <div className="col-md-5">
                <div className="form-group"></div>
              </div>
            </div>
            {/* /row*/}
            <div className="row">
              <div className="col-md-2">
                <label className="fix_spacing">Wednesday</label>
              </div>
              <div className="col-md-5">
                <div className="form-group"></div>
              </div>
              <div className="col-md-5">
                <div className="form-group"></div>
              </div>
            </div>
            {/* /row*/}
            <div className="row">
              <div className="col-md-2">
                <label className="fix_spacing">Thursday</label>
              </div>
              <div className="col-md-5">
                <div className="form-group"></div>
              </div>
              <div className="col-md-5">
                <div className="form-group"></div>
              </div>
            </div>
            {/* /row*/}
            <div className="row">
              <div className="col-md-2">
                <label className="fix_spacing">Friday</label>
              </div>
              <div className="col-md-5">
                <div className="form-group"></div>
              </div>
              <div className="col-md-5">
                <div className="form-group"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <label className="fix_spacing">Saturday</label>
              </div>
              <div className="col-md-5">
                <div className="form-group"></div>
              </div>
              <div className="col-md-5">
                <div className="form-group"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <label className="fix_spacing">Sunday</label>
              </div>
              <div className="col-md-5">
                <div className="form-group"></div>
              </div>
              <div className="col-md-5">
                <div className="form-group"></div>
              </div>
            </div>
          </div>

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
