//components/SignUp.js
import { Component } from "react";
import Validate from "./FormValidation";
import { Auth } from "aws-amplify";
import "./join.scss";

const meta = {
  title: "Join the club!",
  description: "Sign up and enjoy the best travel experiences ever.",
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      terms: null,
      go: false,
      plan: null,
      member: false,
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false,
      },
    };
  }

  componentDidMount() {
    if (!window.FB) this.createScript();
    console.log(this.props);
  }
  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false,
      },
    });
  };

  setTerms = async (event) => {
    let e = await event.target;
    if (e.checked) this.setState({ terms: true });

    this.setState({ terms: false });
    document.getElementById(e.id).classList.remove("is-danger");
  };

  onInputChange = async (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    document.getElementById(e.target.id).classList.remove("is-danger");
  };

  /*
  The following function will be used to set the current user session. In the event that a user has 
  already signed up for an account and navigates to the join page the join component as well as the step
  components will need to know the status of the user. In a future implementation depending on the status 
  of the user they will see various options i.e. if a user has already signed up for an account but hasnt 
  chosen a plan they will only see step 2 and 3. **** NOT SURE IF THIS WILL BE NEEDED. 
  */
  getAWSCredentials(response) {
    const { accessToken, expiresIn } = response;
    const date = new Date();
    const expires_at = expiresIn * 1000 + date.getTime();
    if (!accessToken) {
      return;
    }
    //FACEBOOK Signup
    const fb = window.FB;
    fb.api("/me", { fields: "name,email" }, (response) => {
      const user = {
        name: response.name,
        email: response.email,
      };

      Auth.federatedSignIn("facebook", { token: accessToken, expires_at }, user).then((credentials) => {
        console.log(credentials);
      });
    });
  }
  socialSignUp = (ev) => {
    const fb = window.FB;
    fb.getLoginStatus((response) => {
      if (response.status === "connected") {
        this.getAWSCredentials(response.authResponse);
      } else {
        fb.login(
          (response) => {
            if (!response || !response.authResponse) {
              return;
            }
            this.getAWSCredentials(response.authResponse);
          },
          {
            // the authorized scopes
            scope: "public_profile,email",
          }
        );
      }
    });
  };
  createScript() {
    // load the sdk
    window.fbAsyncInit = this.fbAsyncInit;
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.onload = this.initFB;
    document.body.appendChild(script);
  }

  initFB = () => {
    const fb = window.FB;
  };

  fbAsyncInit() {
    const fb = window.FB;
    fb.init({
      appId: "988116171567278",
      cookie: true,
      xfbml: true,
      version: "v2.11",
    });
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error },
      });
    }
    this.props.auth.putAuthStatus();
    const { name, email, password, confirmpassword } = this.state;
    if ((this.state.terms == true, name, email, password, confirmpassword == password)) {
      try {
        const signUpResponse = await Auth.signUp({
          username: email,
          password,
          attributes: {
            email,
            name,
          },
        });
        if (signUpResponse) {
          this.props.auth.putAuthStatus;
          this.choosePlan();
        }
      } catch (error) {
        let err = null;
        !error.message ? (err = { message: error }) : (err = error);
        this.setState({
          errors: { ...this.state.errors, cognito: error },
        });
      }
    }
  };
  render() {
    return (
      <div className="sign-up-wrap m-auto">
        <section className="fm-head ">
          <hgroup>
            {/* Remove the folowin text given that this component will only be functional reesiding within the component carrying styles and description */}
            <h1>Sign up for an account</h1>
            <p>Sign up and join t the best travel club out there and enjoy the absolute best travel experiences through our experienced….</p>
          </hgroup>
        </section>

        <section>
          <FormErrors formerrors={this.props.state.errors} />
          <form id="cognito-form" className="form-group">
            <div className="form-row d-none">
              <div className="col-6">
                <button onClick={this.props.social} className="button btn btn-primary w1">
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
                  /*value={this.props.state.firstname}*/
                  onChange={this.props.onInputChange}
                  onKeyDown={this.handleKeyDown}
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
                  /* value={this.props.state.user}*/
                  onChange={this.props.onInputChange}
                  onKeyDown={this.handleKeyDown}
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
                  /* value={this.props.state.password}*/
                  onChange={this.props.onInputChange}
                  onKeyDown={this.handleKeyDown}
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
                  /*value={this.props.state.confirmpassword}*/
                  onChange={this.props.onInputChange}
                  onKeyDown={this.handleKeyDown}
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
              <input className="form-check-input is-invalid" type="checkbox" id="terms" required onChange={this.props.setTerms} />

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
              <button onClick={this.props.handleSubmit} className="button t-btn btn-cta">
                Create Account
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default SignUp;
