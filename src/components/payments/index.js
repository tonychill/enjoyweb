import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import PaymentForm from "./paymentForm";

export default class PaymentWrapper extends Component {
  constructor() {
    super();
    this.state = { stripe: null };
  }

  componentDidMount() {
    this.setState({
      stripe: window.Stripe(process.env.STRIPE_PK),
    });
  }
  render() {
    return (
      <StripeProvider stripe={this.state.stripe}>
        <div className="example ???">
          <b>React Stripe Elements Example</b>
          <Elements>
            <PaymentForm membershiplevel={this.props.membershiplevel} />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}
