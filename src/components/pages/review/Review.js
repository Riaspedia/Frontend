import React, { useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "antd";
import FooterAdmin from "../../layout/FooterAdmin";
import GoTop from "../../layout/GoTop";
import HeaderAdmin from "../../layout/HeaderAdmin";
import { baseURL } from "../../routes/Config";
import moment from "moment";
import { relativeTimeRounding } from "moment";

export default function Review() {
  const [image, setImage] = useState();
  let idLocale = require("moment/locale/id");
  moment.locale("id", idLocale);
  const [input, setInput] = useState();

  let id = Cookies.get("vendor_id");

  // ambil data dari API
  const fetchData = async () => {
    let result = await axios.get(baseURL + `/api/vendor/${id}`, {
      headers: { Authorization: "Bearer " + Cookies.get("token") },
    });

    // pilih data dari result api
    let data = result.data.data.reviews;

    // simpan data kedalam state input
    setInput({
      data: data,
    });
  };

  useEffect(() => {
    //nnit kalau adami benya request disini. sampai sininyi dlu bisa.. cobamin nnti kalau adami api req profile dari be harusnya bisami.. sbaeb kalo get nya nanti
    //adapi response nya baru tak ubah yang pas get nya?

    axios
      .get(baseURL + `/api/auth/profile`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        //ini nnti sesuaikan sama response yang dikirim dari backend, biasanya kek bgitu bentuknya.
        setImage(res.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (input != undefined) {
    return (
      <div className="fixed-nav sticky-footer" id="page-top">
        <HeaderAdmin />
        <div className="content-wrapper">
          <div className="container-fluid ml-5">
            {/* Breadcrumbs*/}
            <div
              className="breadcrumb"
              style={{ paddingTop: 10, marginLeft: 50, marginRight: 50 }}
            >
              <Breadcrumb>
                <Breadcrumb.Item href="dashboard">Riaspedia </Breadcrumb.Item>
                <Breadcrumb.Item> Reviews </Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div className="box_general ml-5 mr-5">
              <div className="header_box">
                <h2 className="d-inline-block">Reviews List</h2>
              </div>

              <div className="list_general reviews">
                <ul>
                  {input.data.map((review) => (
                    <li className="d-flex flex-row">
                      <div className="col-md-10 px-0 d-flex flex-row">
                        <div className="profile-image px-0 col-md-1 d-flex flex-column justify-content-top">
                          <img
                            className="m-0"
                            src={review.user.image}
                            alt="profile-picture"
                            style={{
                              width: 60,
                              height: 60,
                              objectFit: "cover",
                              borderRadius: "50%",
                              marginLeft: "24px",
                            }}
                          />
                        </div>
                        <div className="detail col-md-0 mt-2 ">
                          <h4>{review.user.name}</h4>
                          <p>{review.description}</p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex flex-column">
                        <div>
                          <span>{moment(review.created_at).format("LL")}</span>
                          <span className="rating">
                            <i className="fa fa-fw fa-star yellow" />
                            <i className="fa fa-fw fa-star yellow" />
                            <i className="fa fa-fw fa-star yellow" />
                            <i className="fa fa-fw fa-star yellow" />
                            <i className="fa fa-fw fa-star" />
                          </span>
                        </div>
                        <div className="d-flex align-content-start ml-4">
                          <span>{review.score}/5</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* /box_general*/}
            <nav aria-label="...">
              <ul className="pagination pagination-sm add_bottom_30 mr-5 ml-5">
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
          </div>
          {/* /container-fluid*/}
          <FooterAdmin />
        </div>
        {/* /container-wrapper*/}

        <GoTop />
      </div>
    );
  } else {
    return <div></div>;
  }
}
