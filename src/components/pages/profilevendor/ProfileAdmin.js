import React from "react";
import AdminHeader from "../../layout/AdminHeader";
import { MailFilled, PhoneFilled, HomeFilled } from "@ant-design/icons";

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
              <div className="col-md-4" style={{marginTop:"40px"}}>
                <div className="form-group">
                  <Image  src="https://cdn.pixabay.com/photo/2018/03/19/20/17/beauty-parlor-3241097_960_720.jpg" />
                </div>
              </div>
              

              <div className="col-md-8 " >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <Space direction="horizontal">
                        <label style={{ fontSize: "15pt" }}>
                          Beauty Vendor
                        </label>
                      </Space>
                    </div>
                  </div>
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

                {/* /row*/}
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <Space direction="horizontal">
                        <PhoneFilled
                          style={{ fontSize: "24px" }}
                          rotate={100}
                        />
                        <label
                          style={{
                            fontSize: "11pt",
                            fontWeight: "bolder",
                          }}
                        >
                          08583212312498
                        </label>
                      </Space>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <Space direction="horizontal">
                        <MailFilled style={{ fontSize: "24px" }} />
                        <label
                          style={{ fontSize: "11pt", fontWeight: "bolder" }}
                        >
                          budi@mail.com
                        </label>
                      </Space>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <Space direction="horizontal">
                        <HomeFilled style={{ fontSize: "24px" }} />
                        <label
                          style={{ fontSize: "12pt", fontWeight: "bolder" }}
                        >
                          Dukuh Kupang XXV No.2, Surabaya
                        </label>
                      </Space>
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
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ fontSize: "12pt" }}>Sunday :  10 A.M. - 8 P.M.</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ fontSize: "12pt" }}>
                      Monday :  10 A.M. - 8 P.M.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ fontSize: "12pt" }}>Tuesday :  10 A.M. - 8 P.M.</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ fontSize: "12pt" }}>
                      Wednesday :  10 A.M. - 8 P.M.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ fontSize: "12pt" }}>Thursday :  10 A.M. - 8 P.M.</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ fontSize: "12pt" }}>
                      Friday :  10 A.M. - 8 P.M.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label style={{ fontSize: "12pt" }}>Saturday :  10 A.M. - 8 P.M.</label>
                    </div>
                  </div>
                 
                </div>

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
