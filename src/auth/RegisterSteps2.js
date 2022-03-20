import React from "react";
import { TextEditor } from "../components/global/TextEditor";
import UploadBox from "../components/global/UploadBox";

function RegisterSteps2() {
  return (
    <div>
      <div className="row">
        <div className="col-md-7">
          <div className="form-group">
            <label>Photo</label>
            <UploadBox />
          </div>
          <div className="form-group">
            <label>Description</label>
            <TextEditor />
          </div>
        </div>
        <div className="col-md-5 add_top_30">
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
                <div className="styled-select-admin">
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

          {/* /row*/}

          {/* /row*/}
        </div>
      </div>
      <br />

      <label>Working Hours</label>

      <div className="row" style={{ marginTop: "16px" }}>
        <div className="col-md-2">
          <label className="fix_spacing">Monday</label>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <div className="styled-select-admin">
              <select>
                <option>Opening Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <div className="styled-select-admin">
              <select>
                <option>Closing Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* /row*/}
      <div className="row">
        <div className="col-md-2">
          <label className="fix_spacing">Tuesday</label>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <div className="styled-select-admin">
              <select>
                <option>Opening Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <div className="styled-select-admin">
              <select>
                <option>Closing Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* /row*/}
      <div className="row">
        <div className="col-md-2">
          <label className="fix_spacing">Wednesday</label>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <div className="styled-select-admin">
              <select>
                <option>Opening Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <div className="styled-select-admin">
              <select>
                <option>Closing Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* /row*/}
      <div className="row">
        <div className="col-md-2">
          <label className="fix_spacing">Thursday</label>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <div className="styled-select-admin">
              <select>
                <option>Opening Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <div className="styled-select-admin">
              <select>
                <option>Closing Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* /row*/}
      <div className="row">
        <div className="col-md-2">
          <label className="fix_spacing">Friday</label>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <div className="styled-select-admin">
              <select>
                <option>Opening Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <div className="styled-select-admin">
              <select>
                <option>Closing Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <label className="fix_spacing">Saturday</label>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <div className="styled-select-admin">
              <select>
                <option>Opening Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <div className="styled-select-admin">
              <select>
                <option>Closing Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <label className="fix_spacing">Sunday</label>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <div className="styled-select-admin">
              <select>
                <option>Opening Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <div className="styled-select-admin">
              <select>
                <option>Closing Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterSteps2;
