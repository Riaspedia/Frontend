import React from "react";
import { Link } from "react-router-dom";
import HeaderClient from "../../layout/HeaderClient";
import FooterClient from "../../layout/FooterClient";

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
          <div className="container">
            <ul className="clearfix">
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
              <section id="description">
                <h2>Description</h2>
                <p>
                  House of David adalah salon terkemuka di Surabaya. yang
                  pertamakali di dirikan oleh David Ponda Tengker pada tahun
                  1980. Yang saat ini sudah ada 4 cabang tersebar di Surabaya.
                </p>
                <p>
                  Cum et probo menandri. Officiis consulatu pro et, ne sea sale
                  invidunt, sed ut sint <strong>blandit</strong> efficiendi.
                  Atomorum explicari eu qui, est enim quaerendum te. Quo harum
                  viris id. Per ne quando dolore evertitur, pro ad cibo commune.
                </p>
                {/* <h3>Instagram photos feed</h3>
                <div id="instagram-feed" className="clearfix" />
                <hr /> */}
                <br />
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

                <br />
                <h3>Service</h3>
                <div className="salon-wrapper">
                  <div className="salon-service">
                    {/* <label className="category">Service</label> */}
                    <table>
                      <tbody>
                        <tr>
                          <th
                            colSpan={2}
                            style={{
                              backgroundColor: "#f5f5f5",
                              padding: "10px 8px",
                              textTransform: "uppercase",
                            }}
                          >
                            Eyelash Extension
                          </th>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Natural Fluffy{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 200.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2773}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Natural Single{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 230.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2774}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Double Volume{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}1 hour{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 330.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2775}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Russian Volume{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}1 hour{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 430.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2776}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Real Lashes{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}2 hours{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 170.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2808}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              FAVE Natural Single{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}2 hours{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 70.725,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={3188}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              FAVE Real Lashes{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}2 hours{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 54.735,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={3189}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              FAVE Natural Fluffy{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}2 hours{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 60.885,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={3190}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              FAVE Double Volume{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}2 hours{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 101.475,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={3191}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              FAVE Russian Volume{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}2 hours{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 132.225,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={3192}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th
                            colSpan={2}
                            style={{
                              backgroundColor: "#f5f5f5",
                              padding: "10px 8px",
                              textTransform: "uppercase",
                            }}
                          >
                            Eyelash Extension Package
                          </th>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Natural Fluffy - 2 person{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}2 hours{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 370.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2777}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Natural Single - 2 person{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}2 hours{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 430.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2778}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Double Volume - 2 person{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}2 hours and 15 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 630.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2779}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Russian Volume - 2 person{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}2 hours and 15 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 830.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2780}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th
                            colSpan={2}
                            style={{
                              backgroundColor: "#f5f5f5",
                              padding: "10px 8px",
                              textTransform: "uppercase",
                            }}
                          >
                            Others
                          </th>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Keratin Lashlift &amp; Tint{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}1 hour{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 180.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2781}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Keratin Lashlift &amp; Tint - 2 person{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}2 hours{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 330.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2782}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Brow Threading{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}1 hour{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 50.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2783}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Brow Henna{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 70.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2784}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Premium Brow Henna{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}1 hour{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 150.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2785}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Remove Eyelash{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              30 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 70.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2786}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              FAVE Keratin Lashlift Tint{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}1 hour{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 48.585,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={3193}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th
                            colSpan={2}
                            style={{
                              backgroundColor: "#f5f5f5",
                              padding: "10px 8px",
                              textTransform: "uppercase",
                            }}
                          >
                            Make Up
                          </th>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Graduation / Party{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 350.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2789}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Makeup Package (2 person){" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}2 hours{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 600.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2790}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Makeup Package (3 person){" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}3 hours{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 900.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2791}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th
                            colSpan={2}
                            style={{
                              backgroundColor: "#f5f5f5",
                              padding: "10px 8px",
                              textTransform: "uppercase",
                            }}
                          >
                            Retouch Eyelash
                          </th>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              2 Weeks Retouch Natural Fluffy{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 100.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2792}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              2 Weeks Retouch Natural Single{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 115.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2793}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              2 Weeks Retouch Double Volume{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 165.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2794}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              2 Weeks Retouch Russian Volume{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 215.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2795}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              3 Weeks Retouch Natural Fluffy{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 130.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2796}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              3 Weeks Retouch Natural Single{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 149.500,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2797}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              3 Weeks Retouch Double Volume{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 214.500,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2798}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              3 Weeks Retouch Russian Volume{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 279.500,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2799}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              4 Weeks Retouch Natural Fluffy{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 160.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2800}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              4 Weeks Retouch Natural Single{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 184.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2801}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              4 Weeks Retouch Double Volume{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 264.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2802}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              4 Weeks Retouch Russian Volume{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 344.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2803}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              5 Weeks Retouch Natural Fluffy{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 190.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2804}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              5 Weeks Retouch Natural Single{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 218.500,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2805}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              5 Weeks Retouch Double Volume{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 313.500,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2806}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              5 Weeks Retouch Russian Volume{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}
                              45 minutes{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 408.500,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2807}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name">
                            <div className="hb-semi-font black">
                              Retouch Real Lashes 2 weeks{" "}
                            </div>
                            <div className="hb-info">
                              {/* 1 Hour 30 Minutes */}2 hours{" "}
                            </div>
                          </td>
                          <td className="price">
                            <div className="hb-semi-font black">
                              Rp 90.000,00{" "}
                            </div>
                            <div className="add-service">
                              <div className="quantity-row">
                                <input
                                  type="text"
                                  id="input_quantity"
                                  data-item_id={2881}
                                  name="input_quantity"
                                  defaultValue={0}
                                />
                                <div className="add-quantity">+</div>
                                <div className="minus-quantity">-</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* <div className="salon-book">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="salon-map">
                        <label className="category">Map</label>
                        <iframe
                          src="https://maps.google.com/maps?q=-6.186037913066488,106.9800299633655&hl=es;z=14&output=embed"
                          frameBorder={0}
                          style={{ border: 0, borderRadius: 20 }}
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <p>
                  Iudico omnesque vis at, ius an laboramus adversarium. An
                  eirmod doctus admodum est, vero numquam et mel, an duo modo
                  error. No affert timeam mea, legimus ceteros his in. Aperiri
                  honestatis sit at. Eos aeque fuisset ei, case denique eam ne.
                  Augue invidunt has ad, ullum debitis mea ei, ne aliquip
                  dignissim nec.
                </p> */}
                {/* <ul className="cbp_tmtimeline">
                  <li>
                    <time className="cbp_tmtime" dateTime="09:30">
                      <span>30 min.</span>
                      <span>09:30</span>
                    </time>
                    <div className="cbp_tmicon">1</div>
                    <div className="cbp_tmlabel">
                      <div className="hidden-xs">
                        <img
                          src="img/tour_plan_1.jpg"
                          alt
                          className="rounded-circle thumb_visit"
                        />
                      </div>
                      <h4>Interior of the cathedral</h4>
                      <p>
                        Vero consequat cotidieque ad eam. Ea duis errem qui,
                        impedit blandit sed eu. Ius diam vivendo ne.
                      </p>
                    </div>
                  </li>
                  <li>
                    <time className="cbp_tmtime" dateTime="11:30">
                      <span>2 hours</span>
                      <span>11:30</span>
                    </time>
                    <div className="cbp_tmicon">2</div>
                    <div className="cbp_tmlabel">
                      <div className="hidden-xs">
                        <img
                          src="img/tour_plan_2.jpg"
                          alt
                          className="rounded-circle thumb_visit"
                        />
                      </div>
                      <h4>Statue of Saint Reparata</h4>
                      <p>
                        Vero consequat cotidieque ad eam. Ea duis errem qui,
                        impedit blandit sed eu. Ius diam vivendo ne.
                      </p>
                    </div>
                  </li>
                  <li>
                    <time className="cbp_tmtime" dateTime="13:30">
                      <span>1 hour</span>
                      <span>13:30</span>
                    </time>
                    <div className="cbp_tmicon">3</div>
                    <div className="cbp_tmlabel">
                      <div className="hidden-xs">
                        <img
                          src="img/tour_plan_3.jpg"
                          alt
                          className="rounded-circle thumb_visit"
                        />
                      </div>
                      <h4>Huge clock decorated</h4>
                      <p>
                        Vero consequat cotidieque ad eam. Ea duis errem qui,
                        impedit blandit sed eu. Ius diam vivendo ne.
                      </p>
                    </div>
                  </li>
                  <li>
                    <time className="cbp_tmtime" dateTime="14:30">
                      <span>2 hours</span>
                      <span>14:30</span>
                    </time>
                    <div className="cbp_tmicon">4</div>
                    <div className="cbp_tmlabel">
                      <div className="hidden-xs">
                        <img
                          src="img/tour_plan_4.jpg"
                          alt
                          className="rounded-circle thumb_visit"
                        />
                      </div>
                      <h4>Vasari's fresco</h4>
                      <p>
                        Vero consequat cotidieque ad eam. Ea duis errem qui,
                        impedit blandit sed eu. Ius diam vivendo ne.
                      </p>
                    </div>
                  </li>
                </ul> */}
                <hr />
                <p>
                  Mea appareat omittantur eloquentiam ad, nam ei quas{" "}
                  <strong>oportere democritum</strong>. Prima causae admodum id
                  est, ei timeam inimicus sed. Sit an meis aliquam, cetero
                  inermis vel ut. An sit illum euismod facilisis, tamquam
                  vulputate pertinacia eum at.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="bullets">
                      <li>Dolorem mediocritatem</li>
                      <li>Mea appareat</li>
                      <li>Prima causae</li>
                      <li>Singulis indoctum</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="bullets">
                      <li>Timeam inimicus</li>
                      <li>Oportere democritum</li>
                      <li>Cetero inermis</li>
                      <li>Pertinacia eum</li>
                    </ul>
                  </div>
                </div>
                {/* /row */}
                <hr />
                <h3>Location</h3>
                {/* <div id="map" className="map map_single add_bottom_30" /> */}
                <form
                  id="form-reserve"
                  action="https://www.hellobeauty.id/profile_salon/add_to_reservation"
                  method="post"
                >
                  <div className="salon-book">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="salon-map">
                          <label className="category">Map</label>
                          <iframe
                            src="https://maps.google.com/maps?q=-6.186037913066488,106.9800299633655&hl=es;z=14&output=embed"
                            frameBorder={0}
                            style={{ border: 0, borderRadius: 20 }}
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                {/* End Map */}
              </section>
            </div>

            <aside className="col-lg-4" id="sidebar">
              <div className="box_detail booking">
                <form
                  id="form-reserve"
                  action="https://www.hellobeauty.id/profile_salon/add_to_reservation"
                  method="post"
                >
                  <div className="salon-book">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="salon-map">
                          <label className="category">Map</label>
                          <iframe
                            src="https://maps.google.com/maps?q=-6.186037913066488,106.9800299633655&hl=es;z=14&output=embed"
                            frameBorder={0}
                            style={{ border: 0, borderRadius: 20 }}
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                {/* <div className="price">
                  <span>
                    45$ <small>person</small>
                  </span>
                  <div className="score">
                    <span>
                      Good<em>350 Reviews</em>
                    </span>
                    <strong>7.0</strong>
                  </div>
                </div>
                <div className="form-group input-dates">
                  <input
                    className="form-control"
                    type="text"
                    name="dates"
                    placeholder="When.."
                  />
                  <i className="icon_calendar" />
                </div>
                <div className="panel-dropdown">
                  <a href="#">
                    Guests <span className="qtyTotal">1</span>
                  </a>
                  <div className="panel-dropdown-content right">
                    <div className="qtyButtons">
                      <label>Adults</label>
                      <input type="text" name="qtyInput" defaultValue={1} />
                    </div>
                    <div className="qtyButtons">
                      <label>Childrens</label>
                      <input type="text" name="qtyInput" defaultValue={0} />
                    </div>
                  </div>
                </div>
                <a
                  href="cart-1.html"
                  className="btn_1-admin full-width purchase"
                >
                  Purchase
                </a>
                <a
                  href="wishlist.html"
                  className="btn_1-admin full-width outline wishlist"
                >
                  <i className="icon_heart" /> Add to wishlist
                </a>
                <div className="text-center">
                  <small>No money charged in this step</small>
                </div> */}
              </div>
              {/* <ul className="share-buttons">
                <li>
                  <a className="fb-share" href="#0">
                    <i className="social_facebook" /> Share
                  </a>
                </li>
                <li>
                  <a className="twitter-share" href="#0">
                    <i className="social_twitter" /> Tweet
                  </a>
                </li>
                <li>
                  <a className="gplus-share" href="#0">
                    <i className="social_googleplus" /> Share
                  </a>
                </li>
              </ul> */}
            </aside>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /bg_color_1 */}
      {/* /main */}
      <div id="toTop"></div>
      <FooterClient />
    </div>
  );
};

export default DetailOutlet;
