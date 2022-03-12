import React from "react";
import { Fragment } from "react/cjs/react.production.min";

export default function Popup() {
  return (
    <React.Fragment>
      {/* Sign In Popup */}
      <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
        <div className="small-dialog-header"></div>
        <form>
          <div className="sign-in-wrapper">
            <a
              className="btn btn-danger btn-lg btn-block btn-sm"
              href="login-vendor"
              role="button"
            >
              Login as Admin
            </a>
            {/* <div class="text-center"><input type="submit" value="Login as Admin" class="btn_1-admin full-width"></div> */}
            <div className="text-center">
              <span>Or</span>
            </div>
            <a
              className="btn btn-outline-danger btn-lg btn-block btn-sm"
              href="login"
              role="button"
            >
              Login as Client
            </a>
            {/* <div class="text-center"><input type="submit" value="Login as Client" class="btn_1-admin full-width"></div> */}
            <div id="forgot_pw">
              <div className="form-group">
                <label>Please confirm login email below</label>
                <input
                  type="email"
                  className="form-control"
                  name="email_forgot"
                  id="email_forgot"
                />
                <i className="icon_mail_alt" />
              </div>
              <p>
                You will receive an email containing a link allowing you to
                reset your password to a new preferred one.
              </p>
              <div className="text-center">
                <input
                  type="submit"
                  defaultValue="Reset Password"
                  className="btn_1-admin"
                />
              </div>
            </div>
          </div>
        </form>
        {/* form */}
      </div>
      {/* /Sign In Popup */}
    </React.Fragment>
  );
}
