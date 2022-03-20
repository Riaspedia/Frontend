import React, { useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Moment from 'moment';
import { baseURL } from "../../routes/Config";

const CardOutlet = () => {
  const [input, setInput] = useState([]);

  const fetchData = async () => {
    let result = await axios.get(baseURL + `/api/outlet`, {
      headers: { Authorization: "Bearer " + Cookies.get("token") },
    });

    let data = result.data.data;
    let hours = result.data.hour;
    let outlets = [];
    data.map((e) => {
      outlets.push(e);
    });

    console.log(outlets);
    setInput({
      data: outlets,
      hours: hours,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(input);

  const Card = () => {
    return (
      <div>
        {/* /box_list */}
        {input.data.map((outlet) => (
          <div className="isotope-wrapper">
            <div className="box_list mr-0">
              <div className="row no-gutters">
                <div className="col-lg-5">
                  <figure>
                    <a href="/detail">
                      <img
                        src="img/background/HairCut.jpg"
                        className="img-fluid"
                      />
                      <div className="read_more">
                        <span>Read more</span>
                        {/* <a href="/detail">Read more</a> */}
                      </div>
                    </a>
                  </figure>
                </div>
                <div className="container-fluid col-lg-7 p-0">
                  <div className="wrapper container-fluid">
                    <a href="#0" className="wish_bt" />
                    <h3>
                      <a href="/detail">{outlet.title} </a>
                    </h3>
                    <p>{outlet.description}</p>
                    {/* <span className="price">
                    Start From <strong>50k</strong> /per person
                  </span> */}
                  </div>
                  
                  {/* Panggil jamnya */}
                  <ul className="m-0">
                    <i className="icon_clock_alt mr-2" />
                    {input.hours.map((hour) => (
                      hour.outlet_id === outlet.id ? (
                        <li>{(hour.open)} - {hour.close}</li>
                      ) : null
                    ))}

                    <li className="pr-2">
                      <i className="icon_pin_alt" /> {outlet.address}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return <div>{input.data != null ? <Card /> : "tidak ada data"}</div>;
};

export default CardOutlet;
