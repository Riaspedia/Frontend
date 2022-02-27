import React from "react";
import FooterClient from "../../layout/FooterClient";
import HeaderClient from "../../layout/HeaderClient";
import { Button } from "antd";

const Profile = () => {
  return (
    <div>
      <HeaderClient />
      <section className="hero_in tours_detail">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp">
              <span />
              PROFILE CLIENT
            </h1>
          </div>
        </div>
      </section>
      <div className="container container-custom margin_80_0">
        {/* <div className="main_title_2">
          <span>
            <em />
          </span>
          <h2>Profile Details</h2>
        </div> */}
      </div>

      <div>
        <div className="container-fluid">
          {/* Breadcrumbs*/}
          {/* <ol class="breadcrumb">
        <li class="breadcrumb-item">
            <a href="#">Dashboard</a>
        </li>
        <li class="breadcrumb-item active">Add listing</li>
        </ol> */}
          <div className="box_general padding_bottom">
            <div className="header_box version_2">
              <h2>
                <i className="fa fa-user" />
                Profile details
              </h2>
              <Button
                href="/editprofileclient"
                //   onClick={handleDetail}
                type="danger"
                ghost
                style={{ borderRadius: 8, float: "right", height: "100%" }}
              >
                Edit Biodata Diri
              </Button>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Your photo</label>
                  <form action="/file-upload" className="dropzone" />
                </div>
              </div>
              <div className="col-md-8 add_top_30">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                </div>
                {/* /row*/}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Telephone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your telephone number"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                </div>
                {/* /row*/}
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Personal info</label>
                      <textarea
                        style={{ height: 100 }}
                        className="form-control"
                        placeholder="Personal info"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                {/* /row*/}
              </div>
            </div>
          </div>
          {/* /box_general*/}
          {/* <div className="row">
            <div className="col-md-6">
              <div className="box_general padding_bottom">
                <div className="header_box version_2">
                  <h2>
                    <i className="fa fa-lock" />
                    Change password
                  </h2>
                </div>
                <div className="form-group">
                  <label>Old password</label>
                  <input className="form-control" type="password" />
                </div>
                <div className="form-group">
                  <label>New password</label>
                  <input className="form-control" type="password" />
                </div>
                <div className="form-group">
                  <label>Confirm new password</label>
                  <input className="form-control" type="password" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box_general padding_bottom">
                <div className="header_box version_2">
                  <h2>
                    <i className="fa fa-envelope" />
                    Change email
                  </h2>
                </div>
                <div className="form-group">
                  <label>Old email</label>
                  <input
                    className="form-control"
                    name="old_email"
                    id="old_email"
                    type="email"
                  />
                </div>
                <div className="form-group">
                  <label>New email</label>
                  <input
                    className="form-control"
                    name="new_email"
                    id="new_email"
                    type="email"
                  />
                </div>
                <div className="form-group">
                  <label>Confirm new email</label>
                  <input
                    className="form-control"
                    name="confirm_new_email"
                    id="confirm_new_email"
                    type="email"
                  />
                </div>
              </div>
            </div>
          </div> */}
          {/* /row*/}
          <p>
            <a href="#0" className="btn_1-admin medium">
              Save
            </a>
          </p>
        </div>
        {/* /.container-fluid*/}
      </div>
      <FooterClient />
    </div>
  );
};

export default Profile;
