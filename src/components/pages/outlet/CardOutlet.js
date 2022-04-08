import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import Moment from "moment";
import { baseURL } from "../../routes/Config";

const CardOutlet = (props) => {
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

    let data = result.data.data;
    let dayId = result.data.day.id;
    let vendor = [];
    data.map((e) => {
      vendor.push(e);
    });

    setInput({
      data: vendor,
      day_id: dayId,
    });
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

  const Card = () => {
    return (
      <div>
        {/* /box_list */}
        {input.data.map((vendor) => (
          <div className="isotope-wrapper">
            <div className="box_list mr-0">
              <div className="row no-gutters">
                <div className="col-lg-5">
                  <figure>
                    <Link to={`/detailOutlet/${vendor.id}`}>
                      <img src={vendor.image} className="img-fluid" />
                      <div className="read_more">
                        <span>Read more</span>
                      </div>
                    </Link>
                  </figure>
                </div>
                <div className="container-fluid col-lg-7 p-0">
                  <div className="wrapper container-fluid">
                    <a href="#0" className="wish_bt" />
                    <h3>
                      <Link to={`/detailOutlet/${vendor.id}`}>
                        {vendor.name}
                      </Link>
                    </h3>
                    <p>{vendor.category}</p>

                    <p>{vendor.description}</p>
                  </div>
                  {/* Panggil jamnya */}
                  <ul className="m-0">
                    <i className="icon_clock_alt mr-2" />
                    {vendor.hours.map((hour) =>
                      hour.day_id === input.day_id ? (
                        <li>
                          {hour.open} - {hour.close}
                        </li>
                      ) : null
                    )}

                    <li className="pr-2">
                      <i className="icon_pin_alt" /> {vendor.city}
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
