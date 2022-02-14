import React from "react";
import Header from "../../layout/Header";
import FooterClient from "../../layout/FooterClient";


const Home = () => {
  return (
    <div id="page"> 
     <Header/>
      <section className="hero_single version_2">
        <div className="wrapper">
          <div className="container">
            <h3>Rias Pedia</h3>
            <p>Kunjungi MUA </p>
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
          <h2>Our Popular Tours</h2>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
        </div>
        <div className="banner mb-0">
          <div
            className="wrapper d-flex align-items-center opacity-mask"
            data-opacity-mask="rgba(0, 0, 0, 0.3)"
          >
            <div>
              <small>Adventure</small>
              <h3>
                Your Perfect
                <br />
                Advenure Experience
              </h3>
              <p>Activities and accommodations</p>
              <a href="adventure.html" className="btn_1">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_color_1">
        <div className="container margin_80_55">
          <div className="main_title_2">
            {/* <span>
              <em />
            </span> */}
          </div>
        </div>
      </div>
     <FooterClient/>
    </div>
  );
};

export default Home;
            