// See Hexal energy part 2 @ 14:20 https://www.youtube.com/watch?v=2SaO1Pvah2k
import FormErrors from "../components/auth/FormErrors";
import Validate from "../components/auth/FormValidation";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {
        cognito: null,
        blankfield: false,
      },
    };
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
      },
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { Auth, setSession, setUser } = this.props;
    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error },
      });
    }

    // AWS Cognito integration here
    try {
      const { setUser, setSession } = this.props.auth;
      const user = await Auth.signIn(this.state.username, this.state.password);
      setUser(user);
      setSession(await Auth.currentSession());

      // this.props.auth.putAuthStatus(true);
    } catch (error) {
      console.log(error);
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err,
        },
      });
    }
  };
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };
  render() {
    return (
      <section className="section auth">
        <div className="container">
          <h1>Log in</h1>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input className="input" type="text" id="username" aria-describedby="usernameHelp" placeholder="Enter username or email" value={this.state.username} onChange={this.onInputChange} />
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.onInputChange} />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <a href="/forgotpassword">Forgot password?</a>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">Login</button>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
export default LogIn;
