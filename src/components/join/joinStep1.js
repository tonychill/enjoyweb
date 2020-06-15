//join/step1.js
import React, { Component } from "react";
import FormErrors from "../auth/FormErrors";
import Validate from "../auth/FormValidation";
//import Auth from '../auth'
const FlowStep1 = (props) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.awsSignUp(e);
    }
  };
  return (
    <div className="sign-up-wrap m-auto">
      <section className="fm-head ">
        <hgroup>
          <h1>Sign up for an account</h1>
          <p>Sign up and join t the best travel club out there and enjoy the absolute best travel experiences through our experienced….</p>
        </hgroup>
      </section>

      <section>
        <FormErrors formerrors={props.state.errors} />
        <form id="cognito-form" className="form-group">
          <div className="form-row d-none">
            <div className="col-6">
              <button onClick={props.social} className="button btn btn-primary w1">
                Facebook
              </button>
            </div>
            <div className="col-6">
              <button className="button btn btn-primary w1">Google</button>
            </div>
          </div>
          <div className="form-row d-none">
            <span>
              <hr />
            </span>
            <p>or</p>
            <span>
              <hr />
            </span>
          </div>
          <div className="field col px-0">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input in bx-sdw form-control is-danger p-3"
                type="text"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Firstname"
                /*value={props.state.firstname}*/
                onChange={props.onInputChange}
                onKeyDown={handleKeyDown}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field col px-0">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input in bx-sdw form-control "
                type="email"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                /* value={props.state.user}*/
                onChange={props.onInputChange}
                onKeyDown={handleKeyDown}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field col px-0">
            <p className="control has-icons-left">
              <input
                className="input in bx-sdw form-control "
                type="password"
                id="password"
                placeholder="Password"
                /* value={props.state.password}*/
                onChange={props.onInputChange}
                onKeyDown={handleKeyDown}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field col px-0">
            <p className="control has-icons-left">
              <input
                className="input in bx-sdw form-control "
                type="password"
                id="confirmpassword"
                placeholder="Confirm password"
                /*value={props.state.confirmpassword}*/
                onChange={props.onInputChange}
                onKeyDown={handleKeyDown}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>

          <small id="passwordHelpBlock" className="form-text text-muted pr-1 pl-1 mb-2">
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji's.
          </small>
          <div className="form-check ml-1">
            <input className="form-check-input is-invalid" type="checkbox" id="terms" required onChange={props.setTerms} />

            <label className="form-check-labe" htmlFor="terms">
              Agree to the{" "}
              <a href="/terms" className="lkb" target="_blank">
                <strong>terms and conditions</strong>
              </a>
            </label>
            <div className="invalid-feedback d-none">You must agree before submitting.</div>
          </div>
        </form>
      </section>
      <section>
        <div id="_navbuttons" className="row mx-auto">
          <div className="m-auto">
            <button onClick={props.awsSignUp} className="button t-btn btn-cta">
              Create Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default FlowStep1;
