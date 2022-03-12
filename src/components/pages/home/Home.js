import React from "react";
import Header from "../../layout/Header";
import FooterClient from "../../layout/FooterClient";

const Home = () => {
  return (
    <div id="page">
      <Header />
      <section className="hero_single version_2">
        <div className="wrapper">
          <div className="container">
            <h3>Rias Pedia</h3>
            <p>Temukan MUA (Make Up Artist) yang Terdekat </p>
            <form>
              <div className="row no-gutters custom-search-input-2">
                <div className="col-lg-4">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="City..."
                    />
                    <i className="icon_pin_alt" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="dates"
                      placeholder="When.."
                    />
                    <i className="icon_calendar" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="panel-dropdown">
                    <a href="#">
                      Guests <span className="qtyTotal">1</span>
                    </a>
                    <div className="panel-dropdown-content">
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
                </div>
                <div className="col-lg-2">
                  <input
                    type="submit"
                    className="btn_search"
                    defaultValue="Search"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="container container-custom margin_80_0">
        <div className="main_title_2">
          <span>
            <em />
          </span>
          <h2>Browse & Discover</h2>
          {/* <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p> */}
        </div>
        <div className="banner mb-0">
          <div
            className="wrapper d-flex align-items-center opacity-mask"
            data-opacity-mask="rgba(0, 0, 0, 0.3)"
          >
            <div>
              <small>Discover</small>
              <h3>
                Discover Salon, Beauty Clinics, Make Up Artist,
                <br />
                And Many More
              </h3>
              <p>Find Your MUA in Rias Pedia</p>
              <a href="adventure.html" className="btn_1-admin">
                Read more
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
                    <div className="read_more">
                      <span>Read more</span>
                    </div>
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
                    <div className="read_more">
                      <span>Read more</span>
                    </div>
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
                    <div className="read_more">
                      <span>Read more</span>
                    </div>
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
                    <div className="read_more">
                      <span>Read more</span>
                    </div>
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
                    <div className="read_more">
                      <span>Read more</span>
                    </div>
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
                    <div className="read_more">
                      <span>Read more</span>
                    </div>
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
        <div className="main_title_2">
          {/* <span>
              <em />
            </span> */}
        </div>
      </div>
      <FooterClient />
    </div>
  );
};

export default Home;
