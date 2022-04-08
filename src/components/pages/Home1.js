import React from "react";
import HeaderClient from "../layout/HeaderClient";
import FooterClient from "../layout/FooterClient";

const Home1 = () => {
  return (
    <div id="page">
      <HeaderClient />
      <section className="hero_single version_2">
        <div className="wrapper">
          <div className="container">
            <h3>Rias Pedia</h3>
            <p>
              Temukan Pelayanan Jasa Tata Rias Pada Aplikasi Rias Pedia Berbasis
              Website
            </p>

            <div className="col-lg-12">
              <div className="row no-gutters custom-search-input-2 inner">
                <div className="col-lg-4">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Cari nama vendor..."
                    />
                    <i className="icon_search" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Kota"
                    />
                    <i className="icon_pin_alt" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Kategori"
                    />
                    <i className="" />
                  </div>
                </div>

                <div className="col-lg-2">
                  <input
                    type="submit"
                    className="btn_search"
                    defaultValue="Search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container container-custom margin_80_0">
        <div className="main_title_2">
          <span>
            <em />
          </span>
          <h2>Detail Informasi</h2>
          {/* <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p> */}
        </div>
        <div className="banner mb-0">
          <div
            className="wrapper d-flex align-items-center opacity-mask"
            data-opacity-mask="rgba(0, 0, 0, 0.3)"
          >
            <div>
              <small>Rias Pedia</small>
              <h3>
                Beauty Salon, Make Up Artist, Wedding Make Up
                <br />
                dan masih banyak lainnya...
              </h3>
              <p>Percantiklah dirimu hanya di Rias Pedia</p>
              <a href="/outlet" className="btn_1-admin">
                Baca Selengkapnya
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container margin_60_35">
        <div className="wrapper-grid">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="box_grid">
                <figure style={{ borderRadius: 12 }}>
                  <a href="hotel-detail.html">
                    <img
                      src="img/background/photoshoot.jpg"
                      style={{ borderRadius: 12 }}
                    />
                    {/* <div className="read_more">
                      <span>Read more</span>
                    </div> */}
                  </a>
                  <small>Photoshoot Makeup</small>
                </figure>
              </div>
            </div>

            {/* /box_grid */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="box_grid">
                <figure style={{ borderRadius: 12 }}>
                  <a href="hotel-detail.html">
                    <img
                      src="img/background/bold.jpg"
                      style={{ borderRadius: 12 }}
                    />
                  </a>
                  <small>Look Bold Makeup</small>
                </figure>
              </div>
            </div>
            {/* /box_grid */}

            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="box_grid">
                <figure style={{ borderRadius: 12 }}>
                  <a href="hotel-detail.html">
                    <img
                      src="img/background/natural.jpg"
                      style={{ borderRadius: 12 }}
                    />
                  </a>
                  <small>Basic Makeup</small>
                </figure>
              </div>
            </div>
            {/* /box_grid */}

            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="box_grid">
                <figure style={{ borderRadius: 12 }}>
                  <a href="hotel-detail.html">
                    <img
                      src="img/background/eyelash.jpg"
                      style={{ borderRadius: 12 }}
                    />
                  </a>
                  <small>Eyelash Extension</small>
                </figure>
              </div>
            </div>

            {/* /box_grid */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="box_grid">
                <figure style={{ borderRadius: 12 }}>
                  <a href="hotel-detail.html">
                    <img
                      src="img/background/wedding.jpg"
                      style={{ borderRadius: 12 }}
                    />
                  </a>
                  <small>Wedding Makeup</small>
                </figure>
              </div>
            </div>
            {/* /box_grid */}

            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="box_grid">
                <figure style={{ borderRadius: 12 }}>
                  <a href="hotel-detail.html">
                    <img
                      src="img/background/nailart.jpg"
                      style={{ borderRadius: 12 }}
                    />
                  </a>
                  <small>Nail Art</small>
                </figure>
              </div>
            </div>
            {/* /box_grid */}
          </div>
          {/* /row */}
        </div>
        {/* /wrapper-grid */}
      </div>

      <div className="bg_color_1">
        <div className="main_title_2"></div>
      </div>
      <FooterClient />
    </div>
  );
};

export default Home1;
