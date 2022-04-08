import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../layout/HeaderAdmin";
import CardDetailMaps from "./CardDetailMaps";
import { baseURL } from "../../routes/Config";
import Cookies from "js-cookie";
import axios from "axios";

const Maps = () => {
  const id = Cookies.get("vendor_id");
  const [input, setInput] = useState();

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
    fetchData();
  }, []);

  if (input != undefined) {
    return (
      <div
        className="fixed-nav sticky-footer min-vh-100 row mt-0"
        id="page-top"
      >
        <HeaderAdmin />
        <div className="col-sm-2"></div>
        <div class="col-sm-3 d-flex justify-content-end">
          <CardDetailMaps />
        </div>

        <div class="p-0 m-0 col-sm-7">
          <div
            className="container-fluid p-0 col-sm-12 salon-map z-depth-1-half map-container"
            style={{
              position: "relative",
            }}
          >
            {/* <label className="category">Map</label> */}
            <iframe
              src={`https://maps.google.com/maps?q=${input.data.latitude},${input.data.longitude}&hl=es;z=14&output=embed`}
              frameBorder={0}
              style={{
                border: 0,
                borderRadius: 0,
                height: 815,
              }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Maps;
