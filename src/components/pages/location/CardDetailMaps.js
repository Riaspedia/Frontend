import React, { useState, useEffect } from "react";
import { baseURL } from "../../routes/Config";
import Cookies from "js-cookie";
import axios from "axios";

const CardDetailMaps = () => {
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

  if(input != undefined){
    return (
      <div class="row  justify-content-center ">
        <div
          class="card"
          style={{ width: "25rem", marginLeft: "20px", height: "820px" }}
        >
          <div class="card-body">
            <div class="row">
              <h3 class="mb-0 pl-3">{input.data.name}</h3>
            </div>
            <div>
              <span className="rating">
                <i className="fa fa-fw fa-star yellow" />
                <i className="fa fa-fw fa-star yellow" />
                <i className="fa fa-fw fa-star yellow" />
                <i className="fa fa-fw fa-star yellow" />
                <i className="fa fa-fw fa-star" />
              </span>
            </div>
            <p style={{ fontSize: "16px" }}>{input.data.category} di {input.data.city}</p>
  
            <hr class="mt-0" />
            <div class=" row justify-content-start">
              <p class=" pl-3 pr-2" style={{ fontSize: "16px" }}>
                <strong class="bold">Alamat: </strong>{input.data.address}
              </p>
            </div>
  
            <div class=" row ">
              <div class="col-3 pr-0">
                <p class="bold" style={{ fontSize: "16px" }}>
                  Jam Kerja:{" "}
                </p>
              </div>
              <div class="col-4" style={{ fontSize: "16px" }}>
                {input.days.map((day) => (
                  <p class="mb-0 pl-0">{day.name} </p>
                ))}
              </div>
              <div class="col-4" style={{ fontSize: "16px" }}>
              {input.data.hours.map((hour) => (
                  <p class="mb-0 pl-0">{hour.open} - {hour.close} </p>
                ))}
              </div>
            </div>
  
            <div class=" row justify-content-start">
              <p class=" pl-3 mt-3" style={{ fontSize: "16px" }}>
                <strong class="bold">Telepon: </strong>{input.data.phone}
              </p>
            </div>
  
            <div class=" row justify-content-start">
              <p class=" pl-3 " style={{ fontSize: "16px" }}>
                <strong class="bold">Kota: </strong>{input.data.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>
  }
  
};

export default CardDetailMaps;
