import { Auth } from "aws-amplify";

export const clearErrorState = () => {
  this.setState({
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  });
};
export const onInputChange = event => {
  //const [firstname, setFirstname] = useState("");
  this.setState({
    [event.target.id]: event.target.value
  });
  document.getElementById(event.target.id).classList.remove("is-danger");
};

export const handleSubmit = async event => {
  event.preventDefault();

  // Form validation
  this.clearErrorState();
  const error = Validate(event, this.state);
  if (error) {
    this.setState({
      errors: { ...this.state.errors, ...error }
    });
  }

  // AWS Cognito integration here
  const { firstname, lastname, phonenumber, username, password } = this.state;
  try {
    const signUpResponse = await Auth.signUp({
      username,
      password,
      attributes: {
        name: firstname,
        family_name: lastname,
        phone_number: phonenumber
      }
    });
    if (signUpResponse) {
      this.setState({ step: 2, go: true });
    }
  } catch (error) {
    let err = null;
    !error.message ? (err = { message: error }) : (err = error);
    this.setState({ errors: { ...this.state.errors, cognito: error } });
  }
};
