import React from "react";
import { Link } from "react-router-dom";

const FooterClient = () => {
  return (
    <div>
      <footer>
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-5 col-md-12 p-r-5">
              <p>
                <img src="img/logo/LogoRiasPedia.png" width={160} height={50} alt />
              </p>
              <p>
                Rias Pedia merupakan website yang berisi kumpulan Make Up Artist (MUA) di seluruh Indonesia, sehingga mempermudah client 
                untuk menemukan MUA terdekat. 
              </p>
              <div className="follow_us">
                <ul>
                  <li>Follow us</li>
                  <li>
                    <a href="#0">
                      <i className="ti-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="ti-twitter-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="ti-google" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="ti-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="ti-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ml-lg-auto">
              <h5>Useful links</h5>
              <ul className="links">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/home.html">Home</Link>
                </li>
                <li>
                  <Link to="/outlet.html">Outlet</Link>
                </li>
                <li>
                  <Link to="/profile.html">Profile</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Contact with Us</h5>
              <ul className="contacts">
                <li>
                  <a href="tel://61280932400">
                    <i className="ti-mobile" /> + 61 23 8093 3400
                  </a>
                </li>
                <li>
                  <a href="mailto:info@Panagea.com">
                    <i className="ti-email" /> info@otakkanan.co.id
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*/row*/}
          <hr />
          <div className="row">
            <div className="col-lg-6">
              {/* <ul id="footer-selector">
                <li>
                  <div className="styled-select" id="lang-selector">
                    <select>
                      <option value="English" selected>
                        English
                      </option>
                      <option value="French">French</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Russian">Russian</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="styled-select" id="currency-selector">
                    <select>
                      <option value="US Dollars" selected>
                        US Dollars
                      </option>
                      <option value="Euro">Euro</option>
                    </select>
                  </div>
                </li>
                <li>
                  <img src="img/cards_all.svg" alt />
                </li>
              </ul> */}
            </div>
            <div className="col-lg-6">
              <ul id="additional_links">
                {/* <li>
                  <a href="#0">Terms and conditions</a>
                </li>
                <li>
                  <a href="#0">Privacy</a>
                </li> */}
                <li>
                  <span>@ 2022 Rias Pedia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/*/footer*/}
      {/* page */}
    </div>
  );
}

export default FooterClient
