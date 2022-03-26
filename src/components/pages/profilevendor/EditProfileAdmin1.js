import React from "react";
import HeaderAdmin from "../../layout/HeaderAdmin";
import { Breadcrumb, Button, Space } from "antd";
import FooterAdmin from "../../layout/FooterAdmin";
import GoTop from "../../layout/GoTop";
import UploadBox from "../../global/UploadBox";
import Image from "../../../assests/img/MUA1.jpg";
import { TextEditor } from "../../global/TextEditor";

const EditProfileAdmin1 = () => {
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
              <Breadcrumb.Item href="profilevendor">My Vendor</Breadcrumb.Item>
              <Breadcrumb.Item> Edit Vendor </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div class="row justify-content-start">
            <div class="col-6">
              <div
                className="box_general padding_bottom"
                style={{height: "100%"}}
              >
                <div className="header_box version_2">
                  <h2>
                    <i className="fa fa-user" />
                    Edit Vendor
                  </h2>
                </div>
                <div className="col-md-12 d-flex flex-row justify-content-between flex-wrap p-0">
                  <div className="col-lg-3 col-md-12 p-0">
                    <div className="form-group">
                      <img
                        src={Image}
                        alt="profile-picture"
                        style={{
                          width: 144,
                          height: 144,
                          objectFit: "cover",
                          borderRadius: 8,
                          boxShadow: "0 0 0 1px #CED4DA",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <form>
                      <div className="row-md-12 m-0">
                        <input
                          type="file"
                          style={{ border: "none" }}
                          name="image"
                          id="image"
                          className="form-control p-0"
                        />
                      </div>
                      <div className="row-md-12">
                        <label>Pilih file dengan ukuran maksimal 1MB</label>
                      </div>
                      <div className="row-md-12">
                        <button type="submit">Upload</button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row">
                  {/* <div className="col-md-6"> */}
                  {/* <div className="form-group">
                  <label>Vendor photo</label>
                  <UploadBox />
                </div> */}
                  {/* <div className="form-group">
                  <label>Description</label>
                  <TextEditor />
                </div> */}
                  {/* </div> */}
                  <div className="col-md-12 add_top_30">
                    <div className="row wrapper">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Nama Vendor</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nama Vendor"
                          />
                        </div>
                        <div className="form-group">
                          <label>Deskripsi</label>
                          <textarea
                            type="text"
                            className="form-control"
                            placeholder="Deskripsi"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Alamat</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Alamat"
                      />
                    </div>
                    <div class="row justify-content-start">
                      <div class="col-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-6">
                        <div className="form-group">
                          <label>Telepon</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Telepon"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-start">
                      <div class="col-6">
                        <div className="form-group">
                          <label>Provinsi</label>
                          <select
                            className="w-100 input-group-select"
                            style={{
                              height: "42px",
                              borderRadius: "3px",
                              padding: "10px",
                              borderColor: "#d2d8dd",
                            }}
                          >
                            <option defaultValue="">Provinsi</option>
                            {/* {inputProvince.province && (
                              <>
                                {inputProvince.province.map((province) => {
                                  return (
                                    <>
                                      <option
                                        value={[province.name, province.id]}
                                      >
                                        {province.name}
                                      </option>
                                    </>
                                  );
                                })}
                              </>
                            )} */}
                          </select>
                        </div>
                      </div>
                      <div class="col-6">
                        <div className="form-group">
                          <label>Kota</label>
                          <select
                            className="w-100 input-group-select"
                            style={{
                              height: "42px",
                              borderRadius: "3px",
                              padding: "10px",
                              borderColor: "#d2d8dd",
                            }}
                          >
                            <option defaultValue="">Kota</option>
                            {/* {inputProvince.province && (
                              <>
                                {inputProvince.province.map((province) => {
                                  return (
                                    <>
                                      <option
                                        value={[province.name, province.id]}
                                      >
                                        {province.name}
                                      </option>
                                    </>
                                  );
                                })}
                              </>
                            )} */}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* /row*/}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-6" >
              <div className="box_general padding_bottom " style={{height: "100%"}}>
                <div className="header_box version_2">
                  <h2>
                    <i className="fa fa-clock-o" />
                    Working Hours
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
            </div>
          </div>

          {/* /box_general*/}

          {/* /row*/}

          <Button href="/profilevendor" className="btn_1-admin medium mt-3 mb-3" >
            Simpan
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
};

export default EditProfileAdmin1;
