import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../layout/HeaderAdmin";
import { Breadcrumb, Button } from "antd";
import FooterAdmin from "../../layout/FooterAdmin";
import GoTop from "../../layout/GoTop";
import Cookies from "js-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL } from "../../routes/Config";

const ListService = () => {
  let id = Cookies.get("user_id");
  const [input, setInput] = useState({
    name: "",
    price: 0,
    duration: 0,
    category: "",
  });

  const [services, setServices] = useState();

  const dataService = async () => {
    let result = await axios.get(baseURL + `/api/vendor/service/${id}`, {
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    });
    let data = result.data.data;
    setServices({
      data: data,
    });
  };

  const handleDelete = async (id) => {
    // urlnya tanya pakde sama variabelnya
    await axios.get(baseURL + `/api/vendor/deleteService/${id}`, {
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    });

    window.location.reload(false)
  };

  useEffect(() => {
    dataService();
  }, []);

  if (input != undefined) {
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
                <Breadcrumb.Item> Daftar Pelayanan </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <br />
          <div className="container-fluid">
            <div className="box_general">
              <div className="header_box">
                <h2 className="d-inline-block">Daftar Pelayanan</h2>
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
                  {services != undefined ? (
                    services.data.map((service) => (
                      <li>
                        <h4 class="mb-0">{service.name}</h4>
                        <small>{service.category}</small>
                        <p>
                          Durasi : {service.duration} minutes
                          <br />
                          Harga : Rp.{service.price}
                        </p>
                        <div class=" row justify-content-start pl-3">
                          <div>
                            <Link
                              to={`/edit-service/${service.id}`}
                              className="btn btn-success btn-sm"
                            >
                              <i class="fa fa-pencil" aria-hidden="true"></i>{" "}
                              Edit
                            </Link>
                          </div>

                          <div class="ml-2">
                            <button
                              type="button"
                              class="btn btn-danger btn-sm mb-3"
                              onClick={() => handleDelete(service.id)}
                              href="/list"
                            >
                              <i class="fa fa-trash-o" aria-hidden="true"></i>{" "}
                              Hapus
                            </button>
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li>Services Empty</li>
                  )}
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
  } else {
    return <div></div>;
  }
};

export default ListService;
