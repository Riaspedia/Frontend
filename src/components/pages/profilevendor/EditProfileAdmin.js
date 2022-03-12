import React from "react";
import AdminHeader from "../../layout/AdminHeader";

import { Breadcrumb, Button, Space } from "antd";

import FooterAdmin from "../../layout/FooterAdmin";
import GoTop from "../../layout/GoTop";
import UploadBox from "../../global/UploadBox";
import { TextEditor } from "../../global/TextEditor";

export default function EditProfileAdmin() {
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
              <h2>
                <i className="fa fa-user" />
                Vendor details
              </h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Vendor photo</label>
                  <UploadBox />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <TextEditor />
                </div>
              </div>
              <div className="col-md-6 add_top_30">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
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
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Select City</label>
                      <div className="styled-select-admin">
                        <select>
                          <option>Miami</option>
                          <option>New York</option>
                          <option>Los Angeles</option>
                          <option>San Francisco</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ex. 250, Fifth Avenue..."
                      />
                    </div>
                  </div>
                </div>
                {/* /row*/}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>State</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Zip Code</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                {/* /row*/}

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
                <div className="form-group">
                  <div className="styled-select-admin">
                    <select>
                      <option>Opening Time</option>
                      <option>Closed</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <div className="styled-select-admin">
                    <select>
                      <option>Closing Time</option>
                      <option>Closed</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* /row*/}
            <div className="row">
              <div className="col-md-2">
                <label className="fix_spacing">Tuesday</label>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <div className="styled-select-admin">
                    <select>
                      <option>Opening Time</option>
                      <option>Closed</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <div className="styled-select-admin">
                    <select>
                      <option>Closing Time</option>
                      <option>Closed</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* /row*/}
            <div className="row">
              <div className="col-md-2">
                <label className="fix_spacing">Wednesday</label>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <div className="styled-select-admin">
                    <select>
                      <option>Opening Time</option>
                      <option>Closed</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <div className="styled-select-admin">
                    <select>
                      <option>Closing Time</option>
                      <option>Closed</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* /row*/}
            <div className="row">
              <div className="col-md-2">
                <label className="fix_spacing">Thursday</label>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <div className="styled-select-admin">
                    <select>
                      <option>Opening Time</option>
                      <option>Closed</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <div className="styled-select-admin">
                    <select>
                      <option>Closing Time</option>
                      <option>Closed</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* /row*/}
            <div className="row">
              <div className="col-md-2">
                <label className="fix_spacing">Friday</label>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <div className="styled-select-admin">
                    <select>
                      <option>Opening Time</option>
                      <option>Closed</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <div className="styled-select-admin">
                    <select>
                      <option>Closing Time</option>
                      <option>Closed</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <label className="fix_spacing">Saturday</label>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <div className="styled-select-admin">
                    <select>
                      <option>Opening Time</option>
                      <option>Closed</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <div className="styled-select-admin">
                    <select>
                      <option>Closing Time</option>
                      <option>Closed</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <label className="fix_spacing">Sunday</label>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <div className="styled-select-admin">
                    <select>
                      <option>Opening Time</option>
                      <option>Closed</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <div className="styled-select-admin">
                    <select>
                      <option>Closing Time</option>
                      <option>Closed</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* /row*/}

          <Button href="#0" className="btn_1-admin medium">
            Save
          </Button>
        </div>

        <FooterAdmin />
        {/* /.container-fluid*/}
      </div>
      {/* /.container-wrapper*/}

      {/* Scroll to Top Button*/}
      <GoTop />
    </div>
  );
}
