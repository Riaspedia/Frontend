import React, { useState, useContext, useEffect } from "react";
import Header from "../../layout/Header";
import FooterClient from "../../layout/FooterClient";
import Cookies from "js-cookie";
import HeaderClient from "../../layout/Header";
import axios from "axios";
import { baseURL } from "../../routes/Config";

const Home = (props) => {
  const [input, setInput] = useState([]);

  const [sort, setSort] = useState({
    name: props.name,
    city: props.city,
    category: props.category,
  });

  const fetchData = async () => {
    // let result = await axios.get(baseURL + `/api/vendor/sort`, {
    //   headers: { Authorization: "Bearer " + Cookies.get("token") },
    // });

    let result = await axios.post(
      baseURL + `/api/vendor/sort`,
      {
        city: sort.city,
        name: sort.name,
        category: sort.category,
      },
      {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      }
    );
  };

  useEffect(() => {
    setSort({
      ...sort,
      city: props.city,
      category: props.category,
      name: props.name,
    });
    fetchData();
  }, [props]);

  return (
    <div id="page">
      {Cookies.get("user_id") == null ? <Header /> : <HeaderClient />}
      {/* <Header /> */}
      <section className="hero_single version_2">
        <div className="wrapper">
          <div className="container">
            <h3 class="text-white">Rias Pedia</h3>
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
                  <div className="form-group ">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Kategori"
                    />
                   <i class="icon-caret-right"></i> 
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
              {/* /row */}
            </div>

            {/* <form>
              <div className="row no-gutters custom-search-input-2">
                <div className="col-lg-10">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Cari Lokasi Kota, Kategori, Nama Vendor..."
                    />
                    <i className="icon_search" />
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
            </form> */}
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
                    {/* <div className="read_more">
                      <span>Read more</span>
                    </div> */}
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
