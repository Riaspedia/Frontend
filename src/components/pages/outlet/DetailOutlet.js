import React, { useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useParams } from "react-router-dom";
import HeaderClient from "../../layout/HeaderClient";
import Header from "../../layout/Header";
import FooterClient from "../../layout/FooterClient";
import Image from "../../../assests/img/MUA1.jpg";
import { baseURL } from "../../routes/Config";
import moment from "moment";

const DetailOutlet = () => {
  const [image, setImage] = useState();
  let idLocale = require("moment/locale/id");
  moment.locale("id", idLocale);
  const { id } = useParams();
  const [input, setInput] = useState();
  const [review, setReview] = useState({
    vendorId: id,
    service_id: "",
    description: "",
    score: "",
  });

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

  useEffect(() => {
    axios
      .get(baseURL + `/api/auth/profile`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setImage(res.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setReview({ ...review, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //urlnya tanya pakde sama variabelnya
    await axios.post(
      baseURL + `/api/vendor/addReview/`,
      {
        vendorId: review.vendorId,
        description: review.description,
        score: review.score,
        service_id: review.service_id,
      },
      {
        headers: {
          Authorization: `bearer` + Cookies.get("token"),
        },
      }
    );

    setReview({ ...review, description: "", service_id: "" });
    window.location.reload(false);
  };

  useEffect(() => {
    fetchData();
  }, []);


  if (input != undefined) {
    return (
      <div id="page">
        {Cookies.get("token") != null ? <HeaderClient /> : <Header />}
        <section className="hero_in tours_detail">
          <div className="wrapper">
            <div className="container">
              <h1 className="fadeInUp text-white">
                <span class="w-50">{input.data.name}</span>
              </h1>
            </div>
            <span className="magnific-gallery">
              <a
                href="img/gallery/tour_list_2.jpg"
                title="Photo title"
                data-effect="mfp-zoom-in"
              />
              <a
                href="img/gallery/tour_list_3.jpg"
                title="Photo title"
                data-effect="mfp-zoom-in"
              />
            </span>
          </div>
        </section>

        <div className="bg_color_1">
          <div className="container margin_60_35">
            <div className="row">
              <div className="col-lg-12">
                <div className="col-md-12 px-0 d-flex flex-row justify-content-between">
                  <div className="profile-image px-0 col-md-2 d-flex flex-column justify-content-center">
                    <img
                      className="m-0"
                      src={input.data.image}
                      alt="profile-picture"
                      style={{
                        width: 120,
                        height: 120,
                        objectFit: "cover",
                        borderRadius: "50%",
                        marginLeft: "24px",
                      }}
                    />

                    <div className="mt-2 rating-wrapper align-items-center">
                      <div className="rating d-flex flex-row">
                        <span className="rating">
                          <i className="fa fa-fw fa-star yellow" />
                          <i className="fa fa-fw fa-star yellow" />
                          <i className="fa fa-fw fa-star yellow" />
                          <i className="fa fa-fw fa-star yellow" />
                          <i className="fa fa-fw fa-star" />
                        </span>
                      </div>
                      <div className="rating-total">
                        <div className="hb-small">
                          {/* 3.5 / 5 · 120 Reviews */}
                          5.0 / 5 · 16 Reviews
                        </div>
                      </div>

                      <div className="salon-profile-card mt-5">
                        <label className="hb-info">Today open</label>
                        <div className="hb-semi-font black">
                          {input.data.hours.map((hour) =>
                            hour.day_id === input.day_id ? (
                              <div className="p-0 m-0">
                                <i className="fa mr-2 fa-clock-o" /> {hour.open}{" "}
                                - {hour.close}
                              </div>
                            ) : null
                          )}
                          {/* 10.00 AM - 19.00 PM */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detail col-md-10 ml-4">
                    <div className="hb-head">
                      <h3>{input.data.name} </h3>
                      {/* Salon angel */}
                    </div>
                    <div className="profile-contact">
                      <a href="tel:081585196656" className="hb-semi-font black">
                        <span>
                          <i className="fa fa-phone" /> {input.data.phone}
                        </span>
                      </a>
                      <span style={{ fontSize: 20, margin: "0 5px" }}>·</span>
                      <a href="mailto:" className="hb-semi-font black">
                        <span>
                          <i className="fa fa-envelope-o" /> {input.data.email}
                        </span>
                      </a>
                    </div>
                    <div className="profile-address">
                      <div className="hb-semi-font black">
                        <i className="fa fa-map-marker" /> {input.data.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-4 d-flex flex-row">
                <section id="description" className="col-md-6">
                  <h2>Deskripsi</h2>
                  <p>{input.data.description}</p>
                  {/* <h3>Instagram photos feed</h3>
                  <div id="instagram-feed" className="clearfix" />
                  <hr /> */}
                  <hr />
                  <h3>Jam Kerja</h3>
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
                  <hr />
                  <h3>Pelayanan</h3>
                  <table className="table">
                    {input.data.services.map((service) => (
                      <>
                        <thead>
                          <tr>
                            <th colSpan="2" className="table-secondary">
                              {service.name}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              {service.category} <br></br>
                              <span>{service.duration} minutes</span>
                            </td>
                            <td class="text-right">Rp {service.price},00</td>
                          </tr>
                        </tbody>
                      </>
                    ))}
                  </table>
                  <hr />
                  <h3>Ulasan</h3>
                  <div className="col-lg-9" id="reviews">
                    <div className="col-md-12 px-0 d-flex flex-column justify-content-between">
                      {input.data.reviews.length > 0 ? (
                        input.data.reviews.map((review) => (
                          <div className="col-md-12 px-0 d-flex flex-row">
                            <div className="profile-image px-0 col-md-2 d-flex flex-column justify-content-top mt-2">
                              <img
                                className="m-0"
                                src={review.user.image}
                                alt="profile-picture"
                                style={{
                                  width: 50,
                                  height: 50,
                                  objectFit: "cover",
                                  borderRadius: "50%",
                                  marginLeft: "24px",
                                }}
                              />
                            </div>
                            <div className="detail col-md-12  p-0 mb-0 mt-2 ml-3">
                              <div>
                                <h4>{review.user.name}</h4>
                                <span className="mt-0 mb-0">
                                  {moment(review.created_at).format("LL")}
                                </span>
                                <p className="mb-0">{review.service.name}</p>
                                <p>{review.score}/5</p>
                              </div>
                              <div>
                                <p class="text-dark">{review.description}</p>
                                <p>Score {" "}{review.score}/5</p>
                              </div>
                         
                              {/* <div>
                                <span className="mt-0 mb-0">
                                  {moment(review.created_at).format("LL")}
                                </span>
                              </div> */}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>{" "}
                  <h3>Tinggalkan Ulasan</h3>
                  <div class="row-12">
                    <form
                      className="row-md-12 d-flex justify-contennt-end flex-column"
                      onSubmit={handleSubmit}
                    >
                      <textarea
                        className="form-control col-md-12"
                        rows="3"
                        id="description"
                        name="description"
                        placeholder="Write your review"
                        value={review.description}
                        onChange={handleChange}
                      ></textarea>
                      <div class="row justify-content-start">
                        <div class="col-9">
                          <div className="form-group">
                            <select
                              className="mt-3 w-100 input-group-select"
                              style={{
                                height: "42px",
                                borderRadius: "3px",
                                padding: "10px",
                                borderColor: "#d2d8dd",
                              }}
                              onChange={handleChange}
                              name="service_id"
                            >
                              <option defaultValue="">Service</option>
                              {input.data.services.map((service) => {
                                return (
                                  <>
                                    <option value={service.id}>
                                      {service.name}
                                    </option>
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </div>

                        <div class="col-3">
                          <div className="form-group">
                            <input
                              type="number"
                              min="0"
                              max="5"
                              className="score form-control mt-3"
                              name="score"
                              value={review.score}
                              onChange={handleChange}
                              placeholder="score"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-success mt-2"
                        style={{ width: "20%" }}
                      >
                        Kirim
                      </button>
                    </form>
                    {/* <button className="btn btn-success mt-2" style={{width: "20%"}}>Kirim</button> */}
                  </div>
                </section>

                {/* Maps */}
                <aside className="col-md-6" id="sidebar">
                  <div
                    className="box_detail booking ml-5"
                    style={{
                      height: "450px",
                      width: "450px",
                      borderRadius: "20px",
                    }}
                  >
                    <form
                      id="form-reserve"
                      action="https://www.hellobeauty.id/profile_salon/add_to_reservation"
                      method="post"
                    >
                      <div
                        className="salon-book"
                        style={{ height: "400px", width: "400px" }}
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="salon-map">
                              <label className="category">Map</label>
                              <iframe
                                src={`https://maps.google.com/maps?q=${input.data.latitude},${input.data.longitude}&hl=es;z=14&output=embed`}
                                frameBorder={0}
                                style={{
                                  border: 0,
                                  borderRadius: 20,
                                  height: 320,
                                }}
                                allowFullScreen
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div id="toTop"></div>
        <FooterClient />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DetailOutlet;
