import PaymentWrapper from "../payments";
const JoinStep3 = (props) => {
  return (
    <div className="sign-up-wrap m-auto">
      <section className="fm-head ">
        <hgroup>
          <h1>Sign up for an account</h1>
          <h2>Payment {props.state.plan}</h2>
          <p>Sign up and join t the best travel club out there and enjoy the absolute best travel experiences through our experienced….</p>
        </hgroup>
      </section>
      <section>
        <PaymentWrapper membershiplevel={props.state.membershiplevel} back={props.back} />
      </section>
    </div>
  );
};
export default JoinStep3;
