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

export default function Review() {
  let idLocale = require("moment/locale/id");
  moment.locale("id", idLocale);
  const [input, setInput] = useState();

  let id = Cookies.get("user_id");
  const fetchData = async () => {
    let result = await axios.get(baseURL + `/api/vendor/${id}`, {
      headers: { Authorization: "Bearer " + Cookies.get("token") },
    });

    let data = result.data.data.reviews;
    setInput({
      data: data,
    });
  };

  useEffect(() => {
    fetchData();
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
                <Breadcrumb.Item> Reviews </Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div className="box_general">
              <div className="header_box">
                <h2 className="d-inline-block">Reviews List</h2>
                <div className="filter">
                  <select name="orderby" className="selectbox">
                    <option value="Any time">Any time</option>
                    <option value="Latest">Latest</option>
                    <option value="Oldest">Oldest</option>
                  </select>
                </div>
              </div>
              <div className="list_general reviews">
                <ul>
                  {input.data.map((review) => (
                    <li>
                      <span>{moment(review.created_at).format('LL')}</span>
                      <span className="rating">
                        <i className="fa fa-fw fa-star yellow" />
                        <i className="fa fa-fw fa-star yellow" />
                        <i className="fa fa-fw fa-star yellow" />
                        <i className="fa fa-fw fa-star yellow" />
                        <i className="fa fa-fw fa-star" />
                      </span>

                      <h4>
                        {review.user.name}
                      </h4>
                      <p>
                        {review.description}
                      </p>
                    </li>
                  ))}
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
