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
                 David Salon Makeup terkenal dengan haraganya yang sangat <strong>terjangkau</strong> bagi mahasiswa.
                 Banyak dari kalangan mahasiswa yang berlangganan dengan Davin Salon karena hasilnya sangat memuaskan dengan
                 harga yang terjangkau pula.
                </p>
                {/* <h3>Instagram photos feed</h3>
                <div id="instagram-feed" className="clearfix" />
                <hr /> */}
                <hr/>

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

                <hr/>
                <h3>Service</h3>

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
                <p>
                  David Salon Makeup memberikan pelayanan yang sangat baik kepada para clientnya. Selain pegawainya yang ramah,
                  salon ini juga memiliki ruangan yang luas dan ber ac sehingga para client akan merasa nyaman saat datang ke salon kami.
                  kami pun menyediakan beberapa <strong>pelayanan</strong> diantaranya. 
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="bullets">
                      <li>Hair Cutting</li>
                      <li>Hair Coloring</li>
                      <li>Hair Do</li>
                      <li>Hair Washing</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="bullets">
                      <li>Bold Makeup</li>
                      <li>Barbie Makeup</li>
                      <li>Wedding Makeup</li>
                      <li>Natural Makeup</li>
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
                  <div className="salon-book"  style={{height:"500px"}}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="salon-map">
                          <label className="category">Map</label>
                          <iframe
                            src="https://maps.google.com/maps?q=-6.186037913066488,106.9800299633655&hl=es;z=14&output=embed"
                            frameBorder={0}
                            style={{ border: 0, borderRadius: 20, height: 430 }}
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
              <div className="box_detail booking" style={{height:"450px", width:"450px", borderRadius:"20px"}}>
                <form
                  id="form-reserve"
                  action="https://www.hellobeauty.id/profile_salon/add_to_reservation"
                  method="post"
                >
                  <div className="salon-book" style={{height:"400px", width:"400px"}}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="salon-map">
                          <label className="category">Map</label>
                          <iframe 
                            src="https://maps.google.com/maps?q=-6.186037913066488,106.9800299633655&hl=es;z=14&output=embed"
                            frameBorder={0}
                            style={{ border: 0, borderRadius: 20, height: 320 }}
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
