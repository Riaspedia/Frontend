import React from "react";
import { TextEditor } from "../components/global/TextEditor";
import UploadBox from "../components/global/UploadBox";

function RegisterSteps2() {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label>Photo</label>
          <UploadBox />
        </div>
        
          <label>Description</label>
          <TextEditor />
        
      </div>
      <div className="col-md-6 add_top_30">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Name</label>
              <input
              style={{ textAlign: "center" }}
                type="text"
                className="form-control"
                placeholder="Your name"
              />
            </div>
          </div>
        </div>
        {/* /row*/}
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Telephone</label>
              <input
              style={{ textAlign: "center" }}
                type="text"
                className="form-control"
                placeholder="Your telephone number"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Email</label>
              <input
              style={{ textAlign: "center" }}
                type="email"
                className="form-control"
                placeholder="Your email"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Select City</label>
              <div className="styled-select-admin" >
                <select style={{ textAlign: "center" }}>
                  <option>Miami</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>San Francisco</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Address</label>
              
              <input
              style={{ textAlign: "center" }}
                type="text"
                className="form-control"
                placeholder="ex. 250, Fifth Avenue..."
              />
            </div>
          </div>
        </div>
        {/* /row*/}
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>State</label>
              <input style={{ textAlign: "center" }} type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Zip Code</label>
              <input style={{ textAlign: "center" }} type="text" className="form-control" />
            </div>
          </div>
        </div>
        {/* /row*/}

        {/* /row*/}
      </div>
    </div>
  );
}

export default RegisterSteps2;
