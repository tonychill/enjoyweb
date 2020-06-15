// import "./../../../public/scss/main.scss";
import Intercom from "react-intercom";
import Head from "next/head";
import config from "../../../config";
import "./layout.scss";

const navClose = () => {
  document.getElementById("useroptions").classList.remove("show");
};
const Layout = ({ children, meta, path }) => {
  return (
    <>
      <Head>
        <title>{meta.title || "The title for this page has not been set."}</title>
        <meta name="description" content={meta.description || "The description for this page has not been set."} />
        <meta content="/media/active-icons/coconut_logo.png" itemprop="image"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></meta>
        <meta charSet="utf-8" />
        <link rel="icon" sizes="16x16" href="/media/active-icons/coconut_logo.png" type="image/png"></link>
        <link type="text/css" rel="stylesheet" href="/static/css/main.css" />
        <script src="/js/hscripts.js" />
        <script src="/js/tracking.js" />

        <script src="https://js.stripe.com/v3/"></script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=809262739512390&ev=PageView&noscript=1" />
        </noscript>
      </Head>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P4CQSB7" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <div onClick={navClose} className="mb-4 mx-2 p-0 row">
        <div className="container">{children}</div>

        {/* Google map component will go here with conditional rendering */}
      </div>
      <div className="app mb-3 uniquie">
        <Intercom appID="kt1baupq" />
      </div>
    </>
  );
};
export default Layout;
