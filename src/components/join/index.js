import { Auth } from "aws-amplify";
import ModalContainer from "../../components/utilities/modal";
import Validate from "../auth/FormValidation";
import JoinStep1 from "./joinStep1";
import JoinStep2 from "./joinStep2";
import JoinStep3 from "./joinStep3";
import "./join.scss";
const meta = {
  title: "Join the club!",
  description: "Sign up and enjoy the best travel experiences ever.",
};

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registered: false,
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      step: 1,
      terms: false,
      go: false,
      membershiplevel: null,
      member: false,
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false,
        terms: false,
      },
    };
  }

  componentDidMount() {
    //Check localStorage to see if the user has alread stated the sign up flow and if so set the step in state to 2.
    let clubSignupPhase = parseInt(localStorage.getItem("clubSignupPhase"));
    if (clubSignupPhase) this.setState({ step: clubSignupPhase });
    // if (!window.FB) this.createScript();

    const isSession = async () => {
      const session = await Auth.currentSession();
      if (session) {
        this.setState({ registered: true, step: 2, terms: true });
      }
    };
    isSession();
    // Removed the following code because it seemed to be causing a bug with the club
    // registration form loading on the first load.
    // if (Auth.currentSession()) this.setState({ registered: true });
    // this.setState({ registered: this.props.auth.authStatus });

    if (this.state.registered) this.setState({ step: 2 });
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
    if (e.checked) {
      this.setState({ terms: true });
    } else {
      this.setState({ terms: false });
    }
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
  chosen a plan they will only see step 2 and 3.
  */

  awsSignUp = async (event) => {
    event.preventDefault(); //// ////FOR TESTING ONLYT/// // Form validation
    ////FOR TESTING ONLYT///
    /*** this.goNext(); */
    this.clearErrorState();

    const error = Validate(event, this.state);
    if (!this.state.terms) {
      /*Implement the 'toast' html element that will show the user that they need to accept the terms. Also, clicking on terms and conditions will
       open a new browser tab where the user will be review the terms. https://github.com/fkhadra/react-toastify
       */
    }

    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error },
      });
      return;
    }

    // AWS Cognito signup

    const { name, email, password, confirmpassword } = this.state;
    !this.state.terms ? alert("Sorry, you need to accept our terms and conditions before you proceed.") : null;
    if (this.state.terms == true) {
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
          console.log(signUpResponse);
          this.props.auth.setUser({ user: signUpResponse.userSub });
          this.setState({ registered: true });
          localStorage.setItem("userSub", signUpResponse.userSub);
          localStorage.setItem("clubSignupPhase", 2);
          this.setState({ step: 2 });
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

  choosePlan = async (plan) => {
    this.setState({ step });
  };
  choosePay = async () => {
    this.setState({ step: 3 });
  };
  //This may be depreciated as their may be no need for a user to go back to a previous step.
  //Unless, on the payment step the user wants to go back and change the plan they selected.
  goBack = (step) => this.setState({ step: step });

  //Sets the plan state to a number that corresponds to the plan the user selects.
  chooseMembershipLevel = (membershiplevel) => {
    this.setState({ membershiplevel });
    this.setState({ step: 3 });
    // this.goNext();
  };
  render() {
    let stage;
    if (!this.state.registered && this.state.step === 1) {
      stage = <JoinStep1 state={this.state} setTerms={this.setTerms} onInputChange={this.onInputChange} awsSignUp={this.awsSignUp} social={this.socialSignUp} />;
    } else if (this.state.step === 2) {
      stage = <JoinStep2 state={this.state} chooseMembershipLevel={this.chooseMembershipLevel} />;
    } else if (this.state.step === 3) {
      stage = <JoinStep3 back={this.goBack} state={this.state} />;
    }
    return (
      <ModalContainer show={this.props.show} onHide={() => this.props.setModalShow(false)}>
        <div className="row ml-3">
          <section className="col-md-12">
            <div className="ct-form mx-auto">{stage}</div>
          </section>
        </div>
      </ModalContainer>
    );
  }
}
export default Join;

/* Possible Edge Cases
- A user may try to sign up for the club using a particular browser that has the session of another previous 
user stored. The new user will not see what they should be seeing. */
//<JoinStep1 next={this.goNext} state={this.state} setTerms={this.setTerms} onInputChange={this.onInputChange} awsSignUp={this.awsSignUp} social={this.socialSignUp} />;

/**goNext = () => {
    const { step } = this.state;
    if (step === 1) {
      this.setState({ step: step + 1 });
    } else if (step === 2) {
      this.setState({ step: state.step + 1});
    }
  }; */
