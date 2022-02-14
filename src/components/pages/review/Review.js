import React from "react";
import AdminHeader from "../../layout/AdminHeader";
import { Breadcrumb } from "antd";
import FooterAdmin from "../../layout/FooterAdmin";
import GoTop from "../../layout/GoTop";

export default function Review() {
  return (
    <div className="fixed-nav sticky-footer" id="page-top">
      <AdminHeader />
      <div className="content-wrapper">
        <div className="container-fluid">
          {/* Breadcrumbs*/}
          <div
            className="breadcrumb"
            style={{ paddingLeft: 15, paddingTop: 10 }}
          >
            <Breadcrumb>
              <Breadcrumb.Item href="dashboard">Riaspedia </Breadcrumb.Item>
              <Breadcrumb.Item> Reviews </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div className="box_general">
            <div className="header_box">
              <h2 className="d-inline-block">Reviews List</h2>
              <div className="filter">
                <select name="orderby" className="selectbox">
                  <option value="Any time">Any time</option>
                  <option value="Latest">Latest</option>
                  <option value="Oldest">Oldest</option>
                </select>
              </div>
            </div>
            <div className="list_general reviews">
              <ul>
                <li>
                  <span>June 15 2017</span>
                  <span className="rating">
                    <i className="fa fa-fw fa-star yellow" />
                    <i className="fa fa-fw fa-star yellow" />
                    <i className="fa fa-fw fa-star yellow" />
                    <i className="fa fa-fw fa-star yellow" />
                    <i className="fa fa-fw fa-star" />
                  </span>

                  <h4>
                    Short Films, Feature Films, Commerical &amp; Advertising{" "}
                    <small>by M.Twain</small>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, dolores mandamus moderatius ea
                    ius, sed civibus vivendum imperdiet ei, amet tritani sea id.
                    Ut veri diceret fierent mei, qui facilisi suavitate
                    euripidis ad. In vim mucius menandri convenire, an brute
                    zril vis. Ancillae delectus necessitatibus no eam, at porro
                    solet veniam mel, ad everti nostrud vim. Eam no menandri
                    pertinacia deterruisset.
                  </p>
                  <p className="inline-popups">
                    <a
                      href="#modal-reply"
                      data-effect="mfp-zoom-in"
                      className="btn_1-admin gray"
                    >
                      <i className="fa fa-fw fa-reply" /> Reply to this review
                    </a>
                  </p>
                </li>
                <li>
                  <span>June 15 2017</span>
                  <span className="rating">
                    <i className="fa fa-fw fa-star yellow" />
                    <i className="fa fa-fw fa-star yellow" />
                    <i className="fa fa-fw fa-star yellow" />
                    <i className="fa fa-fw fa-star" />
                    <i className="fa fa-fw fa-star" />
                  </span>

                  <h4>
                    Bridal Makeup <small>by M.Giuliani</small>
                  </h4>
                  <p>
                    Ex omnis error aliquam quo, eu eos atqui accusam, ex nec
                    sensibus erroribus principes. No pro albucius eloquentiam
                    accommodare. Mei id illud posse persius. Nec eu dico
                    lucilius delicata, qui propriae voluptaria eu.
                  </p>
                  <p className="inline-popups">
                    <a
                      href="#modal-reply"
                      data-effect="mfp-zoom-in"
                      className="btn_1-admin gray"
                    >
                      <i className="fa fa-fw fa-reply" /> Reply to this review
                    </a>
                  </p>
                </li>
                <li>
                  <span>June 15 2017</span>
                  <span className="rating">
                    <i className="fa fa-fw fa-star yellow" />
                    <i className="fa fa-fw fa-star yellow" />
                    <i className="fa fa-fw fa-star yellow" />
                    <i className="fa fa-fw fa-star yellow" />
                    <i className="fa fa-fw fa-star" />
                  </span>

                  <h4>
                    Special Event Makeup Application <small>by G.Lukas</small>
                  </h4>
                  <p>
                    Cum id mundi admodum menandri, eum errem aperiri at. Ut quas
                    facilis qui, euismod admodum persequeris cum at. Summo
                    aliquid eos ut, eum facilisi salutatus ne. Mazim option
                    abhorreant ne his. Mel simul iisque albucius at, probatus
                    indoctum efficiendi mei ei. Veniam percipit ei sea.
                  </p>
                  <p className="inline-popups">
                    <a
                      href="#modal-reply"
                      data-effect="mfp-zoom-in"
                      className="btn_1-admin gray"
                    >
                      <i className="fa fa-fw fa-reply" /> Reply to this review
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* /box_general*/}
          <nav aria-label="...">
            <ul className="pagination pagination-sm add_bottom_30">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1}>
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
          {/* /pagination*/}
        </div>
        {/* /container-fluid*/}
      </div>
      {/* /container-wrapper*/}
      <FooterAdmin />
      <GoTop />
    </div>
  );
}
