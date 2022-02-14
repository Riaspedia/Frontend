import React from "react";
import AdminHeader from "../../layout/AdminHeader";
import { Breadcrumb, Button } from "antd";
import FooterAdmin from "../../layout/FooterAdmin";
import GoTop from "../../layout/GoTop";

export default function List() {
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
              <Breadcrumb.Item> Services List </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div className="box_general padding_bottom">
            <div className="header_box version_2">
              <h2>
                <i className="fa fa-file" />
                Basic info
              </h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bridal Makeup"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Category</label>
                  <div className="styled-select-admin">
                    <select>
                      <option>Cinematic</option>
                      <option>Wedding</option>
                      <option>Beauty Brands</option>
                      <option>Fashion</option>
                      <option>Face and Body Painting</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* /row*/}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Keywords</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Keywords should be separated by commas"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Service Duration</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1 hours"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="45.000"
                  />
                </div>
              </div>
            </div>

            {/* /row*/}
          </div>

          {/* /box_general*/}

          <Button href="#0" className="btn_1-admin medium">
            Save
          </Button>
        </div>
        <br />
        <div className="container-fluid">
          <div className="box_general">
            <div className="header_box">
              <h2 className="d-inline-block">Services List</h2>
              <div className="filter">
                <select name="orderby" className="selectbox">
                  <option value="Any time">Any time</option>
                  <option value="Latest">Latest</option>
                  <option value="Oldest">Oldest</option>
                </select>
              </div>
            </div>
            <div className="list_general">
              <ul>
                <li>
                  <small>Cinematic</small>
                  <h4>
                    Short Films, Feature Films, Commerical &amp; Advertising
                  </h4>
                  <p>
                    Service Duration : 4 hours
                    <br />
                    Price : Rp.100.000
                  </p>
                </li>
                <li>
                  <small>Wedding</small>
                  <h4>Bridal Makeup</h4>
                  <p>
                    Service Duration : 4 hours
                    <br />
                    Price : Rp.100.000
                  </p>
                </li>
                <li>
                  <small>Face and Body Painting</small>
                  <h4>Special Event Makeup Application</h4>
                  <p>
                    Service Duration : 4 hours
                    <br />
                    Price : Rp.100.000
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* /box_general*/}
          <nav aria-label="...">
            <ul className="pagination pagination-sm add_bottom_30">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1}>
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
          {/* /pagination*/}

          {/* /container-fluid*/}
        </div>
        <FooterAdmin />
        <GoTop />
      </div>

      {/* /container-wrapper*/}
    </div>
  );
}
