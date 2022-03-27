import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../layout/HeaderAdmin";
import { Breadcrumb, Button } from "antd";
import FooterAdmin from "../../layout/FooterAdmin";
import GoTop from "../../layout/GoTop";
import Cookies from "js-cookie";
import axios from "axios";
import { baseURL } from "../../routes/Config";

const AddService = () => {
  const [input, setInput] = useState({
    name: "",
    price: 0,
    duration: 0,
    category: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async () => {
    //urlnya tanya pakde sama variabelnya
    await axios.post(
      baseURL + `/api/vendor/addService`,
      {
        name: input.name,
        price: input.price,
        category: input.category,
        duration: input.duration,
      },
      {
        headers: {
          Authorization: "Bearer" + Cookies.get("token"),
        },
      }
    );

    setInput({ ...input, name: "", price: 0, duration: 0, category: "" });
  };

  return (
    <div className="fixed-nav sticky-footer min-vh-100" id="page-top">
      <HeaderAdmin />
      <div className="content-wrapper d-flex flex-column">
        <div className="container-fluid">
          {/* Breadcrumbs*/}
          <div
            className="breadcrumb"
            style={{ paddingLeft: 15, paddingTop: 10 }}
          >
            <Breadcrumb>
              <Breadcrumb.Item href="dashboard">Riaspedia </Breadcrumb.Item>
              <Breadcrumb.Item> Tambah Pelayanan </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="box_general padding_bottom">
              <div className="header_box version_2">
                <h2>
                  <i className="fa fa-file" />
                  Tambah Pelayanan
                </h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Nama Pelayanan</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nama Pelayanan"
                      name="name"
                      id="name"
                      value={input.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Jenis Pelayanan</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Jenis Pelayanan"
                      name="category"
                      id="category"
                      value={input.category}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {/* /row*/}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Durasi Pelayanan</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Durasi Pelayanan"
                      name="duration"
                      id="duration"
                      value={input.duration}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Harga</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Harga Pelayanan"
                      name="price"
                      id="price"
                      value={input.price}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* /row*/}
            </div>

            {/* /box_general*/}

            <Button
              type="submit"
              href="/list"
              className="btn_1-admin medium"
              onClick={handleSubmit}
            >
              Simpan
            </Button>
          </form>
        </div>
        <br />
        <div className="mt-auto mb-0">
          <FooterAdmin />
          <GoTop />
        </div>
      </div>

      {/* /container-wrapper*/}
    </div>
  );
};

export default AddService;
