import Router from "next/router";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";
import Plan from "../../pages/plan/index";
class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { complete: false, stripeMessage: "", stripeErrorMsg: "" };
    this.submit = this.submit.bind(this);
  }

  async submit(e) {
    e.preventDefault();
    try {
      //Add the user name to this token fuction
      let { token } = await this.props.stripe.createToken({ name: "tony" });
      let membershiplevel = this.props.membershiplevel;

      let response = await axios.post(
        //The following server address needs to be based on the dev stage of the env ( local | stage | test | beta | release )
        "https://ek1m119q02.execute-api.us-east-1.amazonaws.com/dev/charge/",
        // "http://localhost:5000/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: { token, membershiplevel },
        }
      );
      console.log(response);
      if (response.data.createdCharge.raw) {
        //Need to think about the various payment failure and success cases. Hardcoding the complete property in
        //state to true in the event that there is a response does not account for all the various payment cases.
        this.setState({ complete: false });
        this.setState({
          stripeErrorMsg: response.data.createdCharge.raw.message,
        });
      } else if (response.data.createdCharge.paid) {
        this.setState({ complete: true });
        console.log(response.data.createdCharge);
        this.setState({
          stripeMessage: response.data.createdCharge.outcome.seller_message,
        });
      } else {
        console.log("Oops"); //More error handling needed. See docs.
      }
    } catch (e) {
      console.log(e, "token error");
      throw e;
    }
  }
  render() {
    if (this.state.complete) {
      Router.push("/profile");
    }
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <p>{this.state.stripeErrorMsg}</p>
        <div className="col-3">
          <button onClick={this.submit} className="button btn btn-outline-primary is-success">
            Join
          </button>
        </div>
      </div>
    );
  }
}
export default injectStripe(PaymentForm);
