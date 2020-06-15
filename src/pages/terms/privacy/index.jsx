//import DTools from "../components/utilities/dtools";
import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import RightFeed from "../../../components/layout/rightfeed";
import TermsRightNavigation from "../../../components/navigation/termsnavigation";

const meta = {
  title: "Terms of Service",
  description: "Index description",
};

const PrivacyTerms = (props) => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <Layout meta={meta} path={path}>
      <div className="row">
        <TermsRightNavigation currentpage={props.page} />
        <div className="subnav show-sm d-none">
          <ul
            className="subnav-list"
            role="navigation"
            aria-label="Terms of service menu"
          >
            <li>
              <a
                className="subnav-item"
                href="/terms"
                aria-selected="true"
                aria-label="Toggle terms of service menu"
                role="button"
              >
                Terms of Service
                <i className="show-sm subnav-icon-toggle icon icon-chevron-down pull-right"></i>
              </a>
            </li>

            <li>
              <a className="subnav-item" href="/terms/nondiscrimination-policy">
                Nondiscrimination Policy
              </a>
            </li>
            <li>
              <a className="subnav-item" href="/terms/payments-terms">
                Payments Terms of Service
              </a>
            </li>
            <li>
              <a className="subnav-item" href="/terms/privacy">
                Privacy Policy
              </a>
            </li>

            <li>
              <a className="subnav-item" href="/terms/copyright-policy">
                Copyright Policy
              </a>
            </li>
            <li>
              <a className="subnav-item" href="/terms/cookie-policy">
                Cookie Policy
              </a>
            </li>
            <li>
              <a className="subnav-item" href="/terms/experiences-guest-waiver">
                Experiences Guest Release and Waiver
              </a>
            </li>
            <li>
              <a className="subnav-item" href="/terms/affiliate-program">
                Affiliate Program
              </a>
            </li>
          </ul>
        </div>
        <div className="text-wrap col-sm-12 col-md-9 col-lg-10 px-5">
          {/*<section>
              <p>
                <strong>
                  If your country of residence is outside of the EEA or the
                  United Kingdom, your agreement with Enjoythevi comprises the
                  <a href="#noneumem">
                    Terms of Service for Non-European Users
                  </a>
                  .
                </strong>
              </p>

              <p>
                <strong>
                  If your country of residence is within the United Kingdom or
                  the European Economic Area (“EEA”), your agreement with
                  Enjoythevi comprises the{" "}
                  <a href="#eu">Terms of Service for European Users</a>.
                </strong>
              </p>

              <a name="noneumem"></a>
            </section> */}

          <h1>Terms of Service</h1>
          <p>
            <strong>
              Please read these Terms of Service (“Terms”) carefully as they
              contain important information about your legal rights, remedies
              and obligations. By using or accessing Enjoythevi or any of its
              services in any way, you agree to comply with and be bound by
              these Terms.
            </strong>
          </p>
          <p>
            <strong>
              Please note: <a href="/terms#sec202002-19">Section 19</a> of these
              Terms contains an arbitration clause and class action waiver that
              applies to all Enjoythevi Users. Regardless of your country of
              residence this provision applies to all disputes with Enjoythevi.
              It affects how disputes with Enjoythevi are resolved. By accepting
              these Terms, you agree to be bound by this arbitration clause and
              class action waiver. Please read it carefully.
            </strong>
          </p>
          <p>Last Updated: Febuary 15, 2020</p>
          <p>Thank you for using Enjoythevi!</p>
          <p>
            Enjoythevi.com is owned and operated by Harley Hill, Inc., a
            corporation registered in the state of Florida. Herin, the Term "
            <strong>Enjoy</strong>" will refer to Harley Hill, Inc. the
            corporation and its operation of Enjoythevi.com and its associated
            services. These Terms constitute a legally binding agreement ("
            <strong>Agreement</strong>") between you and Enjoy (as defined
            below) governing your access to and use of the Enjoy website,
            including any subdomains thereof, and any other websites through
            which Enjoy makes its services available (collectively, "
            <strong>Site</strong>"), and all associated services (collectively,
            "<strong>Enjoy Services</strong>"). The Site and Enjoy Services
            together are hereinafter collectively referred to as the “
            <strong>Enjoy Platform</strong>
            ”. Our
            <a href="/terms/Partner-guarantee"> Reservation Terms</a>,
            {/*<a href="/jpPartnerinsurance-details">Japan Partner Insurance Terms</a>,{" "}*/}
            <a href="/terms/trip-refund-policy"> Trip Refund Policy</a>,{" "}
            <a href="/terms/trip-refund-policy">Travel Club Membership</a>,{" "}
            {/*<a href="/terms/nondiscrimination-policy">
          Nondiscrimination Policy
        </a>{" "}*/}
            and other <a href="/help/terms-n-policies">Policies</a> applicable
            to your use of the Enjoy Platform are incorporated by reference into
            this Agreement.
          </p>
          <p>
            When these Terms mention “<strong>Enjoy</strong>,” “
            <strong>we</strong>,” “<strong>us</strong>,” or “
            <strong>our</strong>,” it refers to the Enjoy company you are
            contracting with. Regardless of your country of residence or
            establishment you are contracting with Harley Hill, Inc., 1372 Bay
            Harbor Drive, Suite 207, Palm Harbor, Fl 34685, United States.
          </p>
          <p>
            Our collection and use of personal information in connection with
            your access to and use of the Enjoy Platform is described in our{" "}
            <a href="/terms/privacy">Privacy Policy</a>.
          </p>
          <p>
            Any and all payment processing services through or in connection
            with your use of the Enjoy Platform ("
            <strong>Payment Services</strong>") are provided to you by Harley
            Hill, Inc. as set out in the "
            <a href="/terms/payments-terms">Payments Terms of Service</a> ("
            <strong>Payments Terms</strong>").
          </p>
          <p>
            Our Partners are responsible for identifying, understanding, and
            complying with all laws, rules and regulations that apply to their
            Listings and Services (as defined below). Partners are alone
            responsible for identifying and obtaining any required licenses,
            permits, or registrations for any of the services they offer.
            Certain types of Services provide by Partners may be prohibited
            altogether. Penalties may include fines or other enforcement such as
            imprisonment. We provide some information in our{" "}
            <a href="/help/partner-responsibilities">Help Center</a> to help you
            identify some of the obligations that apply to you. If you have
            questions about how local laws apply to your Listing(s) and
            Service(s) on Enjoythevi, you should always seek legal guidance.
          </p>
          <aside>
            <h4>Table of Contents</h4>
            <ol>
              <li>
                <a href="/terms#sec202002-1">Applicable Law and Jurisdiction</a>
              </li>
              <li>
                <a href="/terms#sec202002-1">General Provisions</a>
              </li>
              <li>
                <a href="/terms#sec202002-1">Description of Services</a>
              </li>

              <li>
                <a href="/terms#sec202002-3">Modification of these Terms</a>
              </li>
              <li>
                <a href="/terms#sec202002-3">Eligibility</a>
              </li>
              <li>
                <a href="/terms#sec202002-4">Registration</a>
              </li>
              <li>
                <a href="/terms#sec202002-5">Content and Community</a>
              </li>
              <li>
                <a href="/terms#sec202002-6">Privacy</a>
              </li>
              <li>
                <a href="/terms#sec202002-6">Fees and Taxes</a>
              </li>
              <li>
                <a href="/terms#sec202002-6">Loyalty and Points</a>
              </li>
              <li>
                <a href="/terms#sec202002-7">Traveler Requirements</a>
              </li>
              <li>
                <a href="/terms#sec202002-7">Partner Terms of Use</a>
              </li>
              <li>
                <a href="/terms#sec202002-6">Payments</a>
              </li>
              <li>
                <a href="/terms#sec202002-9">
                  Reservation Modifications, Cancellations and Refunds
                </a>
              </li>
              <li>
                <a href="/terms#sec202002-11">Damage to Parther Property</a>
              </li>
              <li>
                <a href="/terms#sec202002-11">
                  Disputes Between Travelers and Partners
                </a>
              </li>

              <li>
                <a href="/terms#sec202002-8">Disclaimers</a>
              </li>
              <li>
                <a href="/terms#sec202002-8">Unauthorized Activities</a>
              </li>
              <li>
                <a href="/terms#sec202002-8">Waiver of Liability</a>
              </li>
              <li>
                <a href="/terms#sec202002-8">
                  Term and Termination, Suspension, and other Measures
                </a>
              </li>
              <li>
                <a href="/terms#sec202002-8">Imdemnification</a>
              </li>
              <li>
                <a href="/terms#sec202002-8">Dispute Resolution</a>
              </li>
              <li>
                <a href="/terms#sec202002-8">Feedback</a>
              </li>
              {/*<li>
          <a href="/terms#sec202002-10">Ratings and Reviews</a>
        </li>*/}

              {/*<li>
          <a href="/terms#sec202002-12">
            Rounding off, Currency conversion
          </a>
        </li>*/}
            </ol>
          </aside>
          <main>
            <section className="mt-5">
              <hgroup>
                {" "}
                <h4>
                  <a name="sec202002-1"></a>1. Applicable Law and Jurisdiction
                </h4>
              </hgroup>
              <article>
                <p>
                  1.1 If you reside in or your country of residence or your
                  country of establishment is the United States and or within
                  any of its territories, these Terms will be interpreted in
                  accordance with the laws of the State of Florida and the
                  United States of America, without regard to conflict-of-law
                  provisions. Judicial proceedings (other than small claims
                  actions) that are excluded from the Arbitration Agreement in
                  Section xxx must be brought in state or federal court in
                  Tampa, Florida, unless there is an agreement on a different
                  location made between Enjoy and your self. You and we both
                  consent to venue and personal jurisdiction in Tampa, Florida.
                </p>
                <p>
                  1.2 If your country of residence or establishment is external
                  to the United States, these Terms will be interpreted in
                  accordance with the laws of the United States. Your rights and
                  protections as a consumer according to the regulations that
                  protect consumer within your particular governing country of
                  residence will not be impacted by your choice of law. As a
                  consumer, you are agreeing to submit to the non-exclusive
                  jurisdiction of the United States. In the event of any
                  judicial proceedings that you may bring against us in
                  connection with or emitting from these Terms may be brought
                  solely in a court located in the United States or a court
                  having jurisdiction in your place of residence. In the event
                  that Enjoy wishes to enforce any of its rights against you or
                  any consumer, we maintain the right and may do so solely in
                  the courts of the jurisdiction in which you reside. If you are
                  acting as a business entity, you agree to submit to the
                  exclusive jurisdiction of the United States courts. The
                  application of the United Nations Convention on Contracts for
                  the International Sale of Goods (CISG) is excluded.
                </p>
                <p></p>
              </article>
            </section>
            <section className="mt-5">
              <hgroup>
                <h4>2. General Provisions</h4>
              </hgroup>
              <article>
                <p>
                  2.1 Except where these terms may be supplemented by additional
                  terms, conditions, standards, guidelines, and policies, these
                  Terms will constitute the entire Agreement between Enjoy and
                  you, its users. It shall pertain to the subject matter hereof,
                  and supersede any and all prior understandings or agreements,
                  written and or oral, between Enjoy and you in relation to the
                  access to and use of the Enjoy Platform.
                </p>
                <p>
                  2.2 In the event that any of the provisions within these Terms
                  are held to be invalid or unenforceable, such provisions shall
                  and will be struck and will not affect the validity and
                  enforceability of the remaining provisions.
                </p>
                <p>
                  2.3 This agreement does not grant you any joint venture,
                  employment, partnership, or any other business relationships
                  between you and Enjoy of use of the Enjoy Platform. In no way
                  does these terms intend to favor or bestow any rights or
                  remedies upon any person other than the parties of these
                  Terms.{" "}
                </p>
                <p>
                  2.4 In the event that Enjoy fails to enforce any right or
                  provision within these Terms, that failure will not constitute
                  a waiver of such right or provision unless it is acknowledged
                  and agreed to by Enjoy in writing. Unless it is expressed in
                  these Terms, either party's exercise of any of their remedies
                  under these Terms will be without prejudice to their other
                  remedies under these Terms or otherwise permitted under law.
                </p>
                <p>
                  2.5 In no way may you assign, delegate or transfer this
                  Agreement and any of your rights and obligations hereunder
                  without Enjoys prior and explicit written consent. Without
                  restriction assign, Enjoy may transfer or delegate this
                  Agreement and any rights and obligations hereunder, at its
                  sole discretion, with notice 30 days prior to that action.
                  Your right to terminate this Agreement at any time remains
                  unaffected.
                </p>
                <p>
                  2.6 Unless specified otherwise, any notices or other
                  communications to Travelers permitted or required under this
                  Agreement, will be provided electronically and given by Enjoy
                  via email, the Enjoy Platform via notification, or messaging
                  service (such as SMS, MMS, Facebook Messenger, or WhatsApp).{" "}
                </p>
              </article>
            </section>
            <section className="mt-5">
              <hgroup>
                <h4></h4>
              </hgroup>
              <article>
                <p></p>
              </article>
            </section>
            <section className="mt-5">
              <hgroup>
                <h4></h4>
              </hgroup>
              <article>
                <p></p>
              </article>
            </section>
            <section className="mt-5">
              <hgroup>
                <h4></h4>
              </hgroup>
              <article>
                <p></p>
              </article>
            </section>
            <section className="mt-5">
              <hgroup>
                <h4></h4>
              </hgroup>
              <article>
                <p></p>
              </article>
            </section>
            <section className="mt-5">
              <hgroup>
                <h4></h4>
              </hgroup>
              <article>
                <p></p>
              </article>
            </section>

            <section className="mt-5">
              <h4>
                <a name="sec202002-1"></a>1. Description of Enjoythevi Services
              </h4>
              <p>
                1.1 Enjoythevi.com is an online platform that enables registered
                users (“<strong>Travelers</strong>”) and third parties who offer
                services to Travelers (third parties who offer services are “
                <strong>Partners</strong>” and the services they offer are “
                <strong>Partner Services</strong>”) to publish such Partner
                Services on the Enjoythevi Platform (“
                <strong>Bookables</strong>”). Partner Services may include the
                offering of vacation homes and other rental properties for use
                overnight accomodations ("
                <strong>Homes</strong>"), crewed or non-crewed charter yachts
                used primarily as overnight accomodations ("
                <strong>Yachts</strong>"), activities spanning one or multiple
                days in a multiple of categories such as but not limited to
                dinning, excursions, and tours (“
                <strong>Experiences</strong>”), access to events (“
                <strong>Events</strong>”), and a variety of both travel and
                non-travel related services such as but not limited to
                housekeeping, airport transfers, taxi, laundry, and planning
                services.
              </p>
              <p>
                1.2 The Enjoythevi Platform provides travelers with
                travel-related content, listings of various Partner Services,
                access to membership benefits, as well as travel related
                services provided by Enjoythevi. Travelers are able to, through
                the Enjoythevi Platform and Services, discover, search, plan,
                and reserve various Partner Services as well as travel-related
                services provided by Enjoythevi. However, Partners alone are
                responsible for their Listings and Services. When Travelers make
                or confirm bookings, they are entering into a contract directly
                with the Partner that listed and directly controls the Bookable
                they have confirmed. Enjoythevi is not and does not become a
                party to any contractual relationship between Travelers and
                Partners. Enjoythevi is in no way a real estate broker or
                insurer and is not acting as an agent in any capacity for any
                Partner, except as specified within the{" "}
                <a href="/terms/payments-terms">Payments Terms</a>.
              </p>
              {/*Working Area*/}
              <p>
                1.3 In the event of a dispute Enjoythevi my help facilitates a
                resolution to that dispute. However, Enjoythevi does not have
                any control over and does not guarantee (i) the safety,
                legality, suitability, quality, or existence of any Listings or
                Partner Services, (ii) the conduct or performance of any
                Traveler, Partner, or third parties, or (iii) the accuracy or
                truth of any Listings, Ratings, Reviews, descriptions, Traveler
                Content, or any other content on the platform. Enjoythevi does
                not and will not endorse any Traveler, Traveler Content,
                Partner, Partner Content, and any Partner Listings and or
                Partner Services. When using the Platform one should always
                ensure that they have exercised due diligence and care when
                making the decision to stay at or in any Bookable, reserve and
                participate in an Experience, attend an Event, use other Partner
                Services, or accept a reservation request from through
                Enjoythevi on behalf of a Traveler. Any image or video content
                used on the Platform (as defined below) are intended only to
                deliver a photographic representation of a Partner Service at
                the time the photograph was taken thus, by default, are not an
                endorsement by Enjoythevi of any Partner Services.
              </p>
              <p>
                1.4 If you choose to use the Enjoythevi Platform as a Partner or
                Co-Partner (as defined below), your relationship with Enjoythevi
                is limited to being an independent, third-party contractor, and
                not an employee, agent, joint venturer or partner of Enjoythevi
                for any reason, and you act exclusively on your own behalf and
                for your own benefit, and not on behalf, or for the benefit, of
                Enjoythevi. Enjoythevi does not, and shall not be deemed to,
                direct or control you generally or in your performance under
                these Terms specifically, including in connection with your
                provision of the Partner Services. You acknowledge and agree
                that you have complete discretion whether to list Partner
                Services or otherwise engage in other business or employment
                activities.
              </p>
              <p>
                1.5 To promote the Enjoythevi Platform and to increase the
                exposure of Listings to potential Guests, Listings and other
                Member Content may be displayed on other websites, in
                applications, within emails, and in online and offline
                advertisements. To assist Members who speak different languages,
                Listings and other Member Content may be translated, in whole or
                in part, into other languages. Enjoythevi cannot guarantee the
                accuracy or quality of such translations and Members are
                responsible for reviewing and verifying the accuracy of such
                translations. The Enjoythevi Platform may contain translations
                powered by Google. Google disclaims all warranties related to
                the translations, express or implied, including any warranties
                of accuracy, reliability, and any implied warranties for
                merchantability, fitness for a particular purpose and
                non-infringement.
              </p>
              <p>
                1.6 The Enjoythevi Platform may contain links to third-party
                websites or resources (“<strong>Third-Party Services</strong>
                ”). Such Third-Party Services may be subject to different terms
                and conditions and privacy practices. Enjoythevi is not
                responsible or liable for the availability or accuracy of such
                Third-Party Services, or the content, products, or services
                available from such Third-Party Services. Links to such
                Third-Party Services are not an endorsement by Enjoythevi of
                such Third-Party Services.
              </p>
              <p>
                1.7 Due to the nature of the Internet, Enjoythevi cannot
                guarantee the continuous and uninterrupted availability and
                accessibility of the Enjoythevi Platform. Enjoythevi may
                restrict the availability of the Enjoythevi Platform or certain
                areas or features thereof, if this is necessary in view of
                capacity limits, the security or integrity of our servers, or to
                carry <a name="sec202002-2"></a>
                out maintenance measures that ensure the proper or improved
                functioning of the Enjoythevi Platform. Enjoythevi may improve,
                enhance and modify the Enjoythevi Platform and introduce new
                Enjoythevi Services from time to time.
              </p>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
};
PrivacyTerms.defaultProps = { page: "privacy" };
export default PrivacyTerms;
