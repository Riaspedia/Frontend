import React, { useState, useEffect } from "react";
import { MailFilled, PhoneFilled, HomeFilled } from "@ant-design/icons";
import { Breadcrumb, Button, Divider, Space } from "antd";
import FooterAdmin from "../../layout/FooterAdmin";
import GoTop from "../../layout/GoTop";
import HeaderAdmin from "../../layout/HeaderAdmin";
import Image from "../../../assests/img/MUA1.jpg";
import { baseURL } from "../../routes/Config";
import { useParams } from "react-router-dom";
import moment from "moment";
import Cookies from "js-cookie";
import axios from "axios";

const ProfileAdmin = () => {
  let idLocale = require("moment/locale/id");
  moment.locale("id", idLocale);
  const id = Cookies.get("user_id");
  const [input, setInput] = useState();
  // const [review, setReview] = useState({
  //   vendorId: id,
  //   description: "",
  //   score: 0,
  // });

  const fetchData = async () => {
    let result = await axios.get(baseURL + `/api/vendor/${id}`, {
      headers: { Authorization: "Bearer " + Cookies.get("token") },
    });

    let data = result.data.data;
    let dayId = result.data.current_day.id;
    let days = result.data.days;
    setInput({
      data: data,
      day_id: dayId,
      days: days,
    });
  };

  // const handleChange = (event) => {
  //   let value = event.target.value;

  //   setReview({ ...review, description: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   //urlnya tanya pakde sama variabelnya
  //   await axios.post(
  //     baseURL + `/api/vendor/addReview/`,
  //     {
  //       vendorId: review.vendorId,
  //       description: review.description,
  //       score: review.score,
  //     },
  //     {
  //       headers: {
  //         Authorization: `bearer` + Cookies.get("token"),
  //       },
  //     }
  //   );

  //   setReview({ ...review, description: "" });
  // };

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
                <Breadcrumb.Item> My Vendor </Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div className="box_general padding_bottom">
              <div className="header_box version_2">
                <Space direction="horizontal">
                  <h2>
                    <i className="fa fa-user" />
                    Detail Vendor
                  </h2>
                </Space>
                <Button
                  href="/editprofilevendor"
                  //   onClick={handleDetail}
                  type="danger"
                  ghost
                  style={{ borderRadius: 8, float: "right", height: "100%" }}
                >
                  Edit Vendor
                </Button>
              </div>
              <div className="row">
                <div className="col-md-2 ">
                  <div className="profile-image px-0 col-md-2 d-flex flex-column justify-content-center">
                    <img
                      src={Image}
                      alt="profile-picture"
                      style={{
                        width: 150,
                        height: 150,
                        objectFit: "cover",
                        borderRadius: "50%",
                        marginLeft: "24px",
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-10 ">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <Space direction="horizontal">
                          <label style={{ fontSize: "15pt" }}>
                           {input.data.name}
                          </label>
                        </Space>
                      </div>
                    </div>
                  </div>

                  {/* /row*/}
                  <div className="row">
                    <div className="col-md-4 pb-0">
                      <div className="form-group">
                        <span>
                          <i className="fa fa-phone" /> {input.data.phone}
                        </span>
                        <span>
                          <i className="fa fa-envelope-o ml-4 p-2" />
                          {input.data.email}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 pt-0">
                      <div className="form-group">
                        <span>
                          <i className="fa fa-map-marker" /> {input.data.address}
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="form-group">
                    <label style={{ fontSize: "15pt" }}>Description</label>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label style={{ fontSize: "12pt", color: "GrayText" }}>
                        {input.data.description}
                        </label>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label style={{ fontSize: "15pt" }}>
                          Working Hours
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row mb10">
                    {input.data.hours.map((hour) => (
                      <div className="col-xs-6 sm-6 col-md-4">
                        <div className="schedule-card">
                          <div className="hb-semi-font black bold">
                            {input.days[hour.day_id - 1].name}
                          </div>
                          <div className="hour">
                            {/* 10:00 AM - 08:00 PM */}
                            {hour.open != null
                              ? hour.open + " - " + hour.close
                              : "closed"}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterAdmin />
        </div>
        <GoTop />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ProfileAdmin;
