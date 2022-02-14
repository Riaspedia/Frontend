import React from "react";
import { Link } from "react-router-dom";
import HeaderClient from "../../layout/HeaderClient";
import FooterCliennt from "../../layout/FooterClient";
import CardOutlet from "./CardOutlet";

const Outlet = () => {
  return (
    <div id="page">
      <HeaderClient />
      {/* <div id="preloader">
                    <div data-loader="circle-side" />
                </div> */}
      {/* /Page Preload */}
      <section className="hero_in tours">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp">
              <span />
              Rias Pedia Outlet
            </h1>
          </div>
        </div>
      </section>
      {/*/hero_in*/}
      <div className="filters_listing sticky_horizontal">
        <div className="container">
          <ul className="clearfix">
            <li>
              <div className="switch-field">
                <input
                  type="radio"
                  id="all"
                  name="listing_filter"
                  defaultValue="all"
                  defaultChecked
                  data-filter="*"
                  className="selected"
                />
                <label htmlFor="all">All</label>
                <input
                  type="radio"
                  id="popular"
                  name="listing_filter"
                  defaultValue="popular"
                  data-filter=".popular"
                />
                <label htmlFor="popular">Popular</label>
                <input
                  type="radio"
                  id="latest"
                  name="listing_filter"
                  defaultValue="latest"
                  data-filter=".latest"
                />
                <label htmlFor="latest">Latest</label>
              </div>
            </li>
            <li>
              <div className="layout_view">
                <a href="tours-grid-isotope.html">
                  <i className="icon-th" />
                </a>
                <a href="rias-pedia-outlet.html" className="active">
                  <i className="icon-th-list" />
                </a>
              </div>
            </li>
            <li>
              <a
                className="btn_map"
                data-toggle="collapse"
                href="#collapseMap"
                aria-expanded="false"
                aria-controls="collapseMap"
                data-text-swap="Hide map"
                data-text-original="View on map"
              >
                View on map
              </a>
            </li>
          </ul>
        </div>
        {/* /container */}
      </div>
      {/* /filters */}
      <div className="collapse" id="collapseMap">
        <div id="map" className="map" />
      </div>
      {/* End Map */}
      <div className="container margin_60_35">
        <div className="col-lg-12">
          <div className="row no-gutters custom-search-input-2 inner">
            <div className="col-lg-4">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="What are you looking for..."
                />
                <i className="icon_search" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Where"
                />
                <i className="icon_pin_alt" />
              </div>
            </div>
            <div className="col-lg-3">
              <select className="wide">
                <option>All Categories</option>
                <option>Churches</option>
                <option>Historic</option>
                <option>Museums</option>
                <option>Walking tours</option>
              </select>
            </div>
            <div className="col-lg-2">
              <input
                type="submit"
                className="btn_search"
                defaultValue="Search"
              />
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /custom-search-input-2 */}
        {/* <div className="isotope-wrapper">
          <div className="box_list isotope-item popular">
            <div className="row no-gutters">
              <div className="col-lg-5">
                <figure>
                  <a href="tour-detail.html">
                    <img
                      src="img/background/Shadow.jpg"
                      className="img-fluid"
                      alt
                      width={800}
                      height={533}
                    />
                    <div className="read_more">
                      <span>Read more</span>
                    </div>
                  </a>
                </figure>
              </div>
              <div className="col-lg-7">
                <div className="wrapper">
                  <a href="#0" className="wish_bt" />
                  <h3>
                    <a href="tour-detail.html">David Salon Makeup</a>
                  </h3>
                  <p>
                    House of David adalah salon terkemuka di Surabaya. yang
                    pertamakali di dirikan oleh David Ponda Tengker pada tahun
                    1980. Yang saat ini sudah ada 4 cabang tersebar di Surabaya.
                  </p>
                  <span className="price">
                    From <strong>$54</strong> /per person
                  </span>
                </div>
                <ul>
                  <li>
                    <i className="icon_clock_alt" /> 09:AM - 19:00 PM
                  </li>
                  <li>
                    <div className="score">
                      <span />
                    </div>
                  </li>
                  <li>
                    <i className="icon_pin_alt" /> Kota Surabaya
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        {/* /box_list */}
        {/* <div className="isotope-wrapper">
          <div className="box_list isotope-item latest">
            <div className="row no-gutters">
              <div className="col-lg-5">
                <figure>
                  <a href="tour-detail.html">
                    <img
                      src="img/background/HairCut.jpg"
                      className="img-fluid"
                      alt
                      width={800}
                      height={533}
                    />
                    <div className="read_more">
                      <span>Read more</span>
                    </div>
                  </a>
                </figure>
              </div>
              <div className="col-lg-7">
                <div className="wrapper">
                  <a href="#0" className="wish_bt" />
                  <h3>
                    <a href="tour-detail.html">Kaizen Haircut</a>
                  </h3>
                  <p>
                    KAIZEN adalah pelayanan potong rambut tanpa air yang
                    dijalankan oleh hairstylist yang dilatih secara professional
                    dengan menggunakan teknik ‘zen wash’ yang inovatif untuk
                    memotong rambut hanya dalam 10 menit saja.
                  </p>
                  <span className="price">
                    From <strong>$124</strong> /per person
                  </span>
                </div>
                <ul>
                  <li>
                    <i className="icon_clock_alt" /> 09:AM - 20:00 PM
                  </li>
                  <li>
                    <div className="score">
                      <span />
                    </div>
                  </li>
                  <li>
                    <i className="icon_pin_alt" /> Kota Surabaya
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        {/* /box_list */}
        {/* <div className="isotope-wrapper">
          <div className="box_list isotope-item latest">
            <div className="row no-gutters">
              <div className="col-lg-5">
                <figure>
                  <a href="tour-detail.html">
                    <img
                      src="img/background/SiskaNailsArt.jpg"
                      className="img-fluid"
                      alt
                      width={800}
                      height={533}
                    />
                    <div className="read_more">
                      <span>Read more</span>
                    </div>
                  </a>
                </figure>
              </div>
              <div className="col-lg-7">
                <div className="wrapper">
                  <a href="#0" className="wish_bt" />
                  <h3>
                    <a href="tour-detail.html">Siska Nails Art</a>
                  </h3>
                  <p>
                    Nail art siska adalah Salon Kuku yang terletak di Jakarta.
                    Alamat entitas yang terdaftar adalah 4, Jl. Duren Sawit
                    Indah No.A12/12, RT.5/RW.18, Klender, Kec. Duren Sawit, Kota
                    Jakarta Timur, Daerah Khusus Ibukota Jakarta 13470.{" "}
                  </p>
                  <span className="price">
                    From <strong>$124</strong> /per person
                  </span>
                </div>
                <ul>
                  <li>
                    <i className="icon_clock_alt" /> 09:AM - 20:00 PM
                  </li>
                  <li>
                    <div className="score">
                      <span />
                    </div>
                  </li>
                  <li>
                    <i className="icon_pin_alt" /> Kota Jakarta Timur
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        {/* /box_list */}
        {/* <div className="isotope-wrapper">
          <div className="box_list isotope-item latest">
            <div className="row no-gutters">
              <div className="col-lg-5">
                <figure>
                  <a href="tour-detail.html">
                    <img
                      src="img/background/MUA1.jpg"
                      className="img-fluid"
                      alt
                      width={800}
                      height={533}
                    />
                    <div className="read_more">
                      <span>Read more</span>
                    </div>
                  </a>
                </figure>
              </div>
              <div className="col-lg-7">
                <div className="wrapper">
                  <a href="#0" className="wish_bt" />
                  <h3>
                    <a href="tour-detail.html">Zoela Bridal Gown &amp; MUA</a>
                  </h3>
                  <p>
                    Zoela Bridal sudah terpercaya melayani tata rias pengantin
                    selama bertahun-tahun. Zoela Bridal berlokasi di Malang
                    kota. Free transport utk area Malang dan sekitarnya.
                  </p>
                  <span className="price">
                    From <strong>$124</strong> /per person
                  </span>
                </div>
                <ul>
                  <li>
                    <i className="icon_clock_alt" /> 09:AM - 18:00 PM
                  </li>
                  <li>
                    <div className="score">
                      <span />
                    </div>
                  </li>
                  <li>
                    <i className="icon_pin_alt" /> Kota Malang
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        {/* /box_list */}
        {/* <div className="box_list isotope-item latest">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <figure>
                <a href="tour-detail.html">
                  <img
                    src="img/background/HairDo.jpg"
                    className="img-fluid"
                    alt
                    width={800}
                    height={533}
                  />
                  <div className="read_more">
                    <span>Read more</span>
                  </div>
                </a>
              </figure>
            </div>
            <div className="col-lg-7">
              <div className="wrapper">
                <a href="#0" className="wish_bt" />
                <h3>
                  <a href="tour-detail.html">Anata Salon</a>
                </h3>
                <p>
                  Tatanan rambut (hairstyling) dan hair style sanggul yang tepat
                  dan cantik akan membuat siapa saja semakin percaya diri saat
                  menghadiri suatu acara. Dengan stylist yang berpengalaman,
                  Anata akan membantu anda untuk tampil lebih sempurna di setiap
                  acara yang anda hadiri.
                </p>
                <span className="price">
                  From <strong>$124</strong> /per person
                </span>
              </div>
              <ul>
                <li>
                  <i className="icon_clock_alt" /> 08:AM - 20:30 PM
                </li>
                <li>
                  <div className="score">
                    <span />
                  </div>
                </li>
                <li>
                  <i className="icon_pin_alt" /> Kota Bandung
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <CardOutlet />
        <CardOutlet />
      </div>
      {/* /isotope-wrapper */}
      <p className="text-center add_top_30">
        <a href="#0" className="btn_1-admin rounded">
          Load more
        </a>
      </p>
      {/* /container */}

      <FooterCliennt />
    </div>
  );
};

export default Outlet;
