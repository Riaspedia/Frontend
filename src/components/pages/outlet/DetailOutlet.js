import React from "react";
import { Link } from "react-router-dom";
import HeaderClient from "../../layout/HeaderClient";
import FooterClient from "../../layout/FooterClient";
import Image from "../../../assests/img/MUA1.jpg";

const DetailOutlet = () => {
  return (
    <div id="page">
      <HeaderClient />
      <section className="hero_in tours_detail">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp">
              <span />
              David Salon Makeup
            </h1>
          </div>
          <span className="magnific-gallery">
            <a
              href="img/gallery/tour_list_1.jpg"
              className="btn_photos"
              title="Photo title"
              data-effect="mfp-zoom-in"
            >
              View photos
            </a>
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
        <nav className="secondary_nav sticky_horizontal">
          <div className="container mt-2">
            <ul className="clearfix m-0">
              <li>
                <a href="#description" className="active">
                  Description
                </a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <a href="#sidebar">Booking</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-8">
              <div className="col-md-12 px-0 d-flex flex-row justify-content-between">
                <div className="profile-image px-0 col-md-2 d-flex flex-column justify-content-center">
                  <img
                    className="m-0"
                    src={Image}
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
                    {/* <span class="rating-love"><img src="https://www.hellobeauty.id/assets/images/rating-full.svg"></span><span class="rating-love"><img src="https://www.hellobeauty.id/assets/images/rating-full.svg"></span><span class="rating-love"><img src="https://www.hellobeauty.id/assets/images/rating-full.svg"></span><span class="rating-love"><img src="https://www.hellobeauty.id/assets/images/rating-half.svg"></span> */}
                    <div className="rating d-flex flex-row">
                      <img src="https://www.hellobeauty.id/assets/images/rating-full.svg" />
                      <img src="https://www.hellobeauty.id/assets/images/rating-full.svg" />
                      <img src="https://www.hellobeauty.id/assets/images/rating-full.svg" />
                      <img src="https://www.hellobeauty.id/assets/images/rating-full.svg" />
                      <img src="https://www.hellobeauty.id/assets/images/rating-full.svg" />
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
                        <i className="fa fa-clock-o" /> 09.00 AM - 08.00 PM
                        {/* 10.00 AM - 19.00 PM */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detail col-md-10 ml-4">
                  <div className="hb-head">
                    <h3>Kriwil Salon </h3>
                    {/* Salon angel */}
                  </div>
                  <div className="profile-contact">
                    <a href="tel:081585196656" className="hb-semi-font black">
                      <span>
                        <i className="fa fa-phone" /> 081585196656{" "}
                      </span>
                    </a>
                    <span style={{ fontSize: 20, margin: "0 5px" }}>·</span>
                    <a href="mailto:" className="hb-semi-font black">
                      <span>
                        <i className="fa fa-envelope-o" /> kriwilsalon@gmail.com{" "}
                      </span>
                    </a>
                  </div>
                  <div className="profile-address">
                    <div className="hb-semi-font black">
                      <i className="fa fa-map-marker" /> Jl. Panglima Polim
                      No.125C, RT.2/RW.1, Pulo, Kec. Kby. Baru, Kota Jakarta
                      Selatan, Daerah Khusus Ibukota Jakarta 12160 Kota Jakarta
                      Selatan, Dki Jakarta
                      {/*  EV Hive at IFC Tower 1,11th Floor. Jl. Jend. Sudirman Kav 22-23, DKI Jakarta 12920 */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 d-flex flex-row">
              <section id="description" className="col-md-8">
                <h2>Description</h2>
                <p>
                  House of David adalah salon terkemuka di Surabaya. yang
                  pertamakali di dirikan oleh David Ponda Tengker pada tahun
                  1980. Yang saat ini sudah ada 4 cabang tersebar di Surabaya.
                </p>
                <p>
                  David Salon Makeup terkenal dengan haraganya yang sangat{" "}
                  <strong>terjangkau</strong> bagi mahasiswa. Banyak dari
                  kalangan mahasiswa yang berlangganan dengan Davin Salon karena
                  hasilnya sangat memuaskan dengan harga yang terjangkau pula.
                </p>
                {/* <h3>Instagram photos feed</h3>
                <div id="instagram-feed" className="clearfix" />
                <hr /> */}
                <hr />

                <h3>
                  Working Hours
                  {/* Program <small>(60 minutes)</small> */}
                </h3>
                <div className="row mb10">
                  <div className="col-xs-6 sm-6 col-md-4">
                    <div className="schedule-card">
                      <div className="hb-semi-font black bold">Monday</div>
                      <div className="hour">
                        {/* 10:00 AM - 08:00 PM */}
                        12.00 AM - 12.30 AM{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 sm-6 col-md-4">
                    <div className="schedule-card">
                      <div className="hb-semi-font black bold">Tuesday</div>
                      <div className="hour">
                        {/* 10:00 AM - 08:00 PM */}
                        10.00 AM - 09.00 PM{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 sm-6 col-md-4">
                    <div className="schedule-card">
                      <div className="hb-semi-font black bold">Wednesday</div>
                      <div className="hour">
                        {/* Closed */}
                        10.00 AM - 09.00 PM{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 sm-6 col-md-4">
                    <div className="schedule-card">
                      <div className="hb-semi-font black bold">Thursday</div>
                      <div className="hour">
                        {/* 08:00 AM - 10:00 PM */}
                        10.00 AM - 09.00 PM{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 sm-6 col-md-4">
                    <div className="schedule-card">
                      <div className="today-open">
                        <div className="hb-small">Today</div>
                      </div>
                      <div className="hb-semi-font black bold">Friday</div>
                      <div className="hour">
                        {/* Closed */}
                        10.00 AM - 09.00 PM{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 sm-6 col-md-4">
                    <div className="schedule-card">
                      <div className="hb-semi-font black bold">Saturday</div>
                      <div className="hour">
                        {/* 08:00 AM - 10:00 PM */}
                        10.00 AM - 09.00 PM{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 sm-6 col-md-4">
                    <div className="schedule-card">
                      <div className="hb-semi-font black bold">Sunday</div>
                      <div className="hour">
                        {/* Closed */}
                        Closed
                      </div>
                    </div>
                  </div>
                </div>

                <hr />
                <h3>Service</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan="2" className="table-secondary">
                        Haircut
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Women (by Gracia) <br></br>
                        <span>40 minutes</span>
                      </td>
                      <td class="text-right" >Rp 180.000,00</td>
                    </tr>
                  </tbody>
                </table>

                <hr />
                <h3>Reviews</h3>
                <div className="col-lg-8">
                  <div className="col-md-12 px-0 d-flex flex-row justify-content-between">
                    <div className="profile-image px-0 col-md-2 d-flex flex-column justify-content-top mt-2">
                      <img
                        className="m-0"
                        src={Image}
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
                    <div className="detail col-md-10 ml-0 p-0 mb-0 mt-2">
                     <div>
                       <h4>Nuhi Nurhidayah</h4>
                     </div>
                      <div>
                          <span className="mt-0">
                            28 September 2022
                          </span>      
                      </div>
                      <div>
                        <p class="text-dark">Thanks Tim Kriwil, pelayanannya bagus dan sudah buat rambutku makin cute</p>
                      </div>
                      <div className="mt-2 rating-wrapper ml-0">
                        {/* <span class="rating-love"><img src="https://www.hellobeauty.id/assets/images/rating-full.svg"></span><span class="rating-love"><img src="https://www.hellobeauty.id/assets/images/rating-full.svg"></span><span class="rating-love"><img src="https://www.hellobeauty.id/assets/images/rating-full.svg"></span><span class="rating-love"><img src="https://www.hellobeauty.id/assets/images/rating-half.svg"></span> */}
                        <div className="rating d-flex flex-row">
                          <img src="https://www.hellobeauty.id/assets/images/rating-full.svg" />
                          <img src="https://www.hellobeauty.id/assets/images/rating-full.svg" />
                          <img src="https://www.hellobeauty.id/assets/images/rating-full.svg" />
                          <img src="https://www.hellobeauty.id/assets/images/rating-full.svg" />
                          <img src="https://www.hellobeauty.id/assets/images/rating-full.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Maps */}
              <aside className="col-md-4" id="sidebar">
                <div
                  className="box_detail booking"
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
                              src="https://maps.google.com/maps?q=-6.186037913066488,106.9800299633655&hl=es;z=14&output=embed"
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
};

export default DetailOutlet;
